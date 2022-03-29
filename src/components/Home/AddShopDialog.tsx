import '@/assets/styles/components/Home/AddShopDialog.scss';
import { useState } from 'react';
import IconClose from '@/assets/images/icon_close.svg';
import SearchBox from '@/components/Common/SearchBox';

type Props = {
  closeDialog: VoidFunction;
};

const AddShopDialog: React.FC<Props> = ({ closeDialog }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsSearched(false);
    setShopInfoList([]);
  };

  const [isSearching, setIsSearching] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  type ShopInfo = { placeId: string | undefined; name: string | undefined; address: string | undefined };
  type ShopInfoList = ShopInfo[];
  const [shopInfoList, setShopInfoList] = useState<ShopInfoList>([]);

  const searchShop = () => {
    // 入力値が空文字の場合は何もしない
    if (inputValue.length === 0) return;
    setIsSearching(true);

    const request = {
      query: inputValue,
      fields: ['name', 'geometry'],
    };

    const { google } = window;
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    const searchResultShopInfoList: ShopInfoList = [];
    const setSearchResultShopInfoList = (results: google.maps.places.PlaceResult[] | null) => {
      if (!results) return;
      results.forEach((result) => {
        searchResultShopInfoList.push({
          placeId: result.place_id,
          name: result.name,
          address: result.formatted_address,
        });
      });
    };
    service.textSearch(request, (results, status, pagination) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if (pagination?.hasNextPage) {
          pagination.nextPage();
          setSearchResultShopInfoList(results);
        } else {
          setSearchResultShopInfoList(results);
          setShopInfoList(searchResultShopInfoList);
          setIsSearched(true);
          setIsSearching(false);
        }
      }
    });
  };

  return (
    <div className="add-shop-dialog">
      <button type="button" onClick={closeDialog} className="add-shop-dialog__close-button">
        <img src={IconClose} alt="ダイアログを閉じる" />
      </button>
      <div className="add-shop-dialog__search-box-wrapper">
        <SearchBox value={inputValue} changeValue={(e) => handleChange(e)} handleSearch={() => searchShop()} />
      </div>
      {isSearching && <div>検索中...</div>}
      {isSearched && !isSearching && (
        <>
          <div className="add-shop-dialog__shop-number">検索結果 {shopInfoList.length}件</div>
          <ul className="add-shop-dialog__shop-list">
            {shopInfoList.map((shopInfo: ShopInfo) => (
              <li className="add-shop-dialog__shop-list-item" key={shopInfo.placeId}>
                <div className="add-shop-dialog__shop-list-item__name">{shopInfo.name}</div>
                <div className="add-shop-dialog__shop-list-item__address">{shopInfo.address}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AddShopDialog;
