import '@/assets/styles/components/Home/AddShopDialog/index.scss';
import { useState } from 'react';
import IconClose from '@/assets/images/icon_close.svg';
import SearchBox from '@/components/Common/SearchBox';
import AddShopDialogContent from '@/components/Home/AddShopDialog/AddShopDialogContent';

type Props = {
  closeDialog: VoidFunction;
};

export type SearchResultShopInfo = {
  placeId: string | undefined;
  name: string | undefined;
  address: string | undefined;
};
export type SearchResultShopInfoList = SearchResultShopInfo[];

const AddShopDialog: React.FC<Props> = ({ closeDialog }) => {
  const [inputValue, setInputValue] = useState('');
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsSearched(false);
    setSelectedShopName(null);
    setIsDuplicateShopInfo(false);
    setIsAddedShopInfo(false);
    setSearchResultShopInfoList([]);
  };

  const [isSearching, setIsSearching] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [selectedShopName, setSelectedShopName] = useState<string | null>(null);
  const [isDuplicateShopInfo, setIsDuplicateShopInfo] = useState(false);
  const [isAddedShopInfo, setIsAddedShopInfo] = useState(false);
  const [searchResultShopInfoList, setSearchResultShopInfoList] = useState<SearchResultShopInfoList>([]);

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

    const searchResultShopInfoList: SearchResultShopInfoList = [];
    const addSearchResultShopInfoList = (results: google.maps.places.PlaceResult[] | null) => {
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
          addSearchResultShopInfoList(results);
        } else {
          addSearchResultShopInfoList(results);
          setSearchResultShopInfoList(searchResultShopInfoList);
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
        <SearchBox value={inputValue} handleChangeValue={(e) => changeValue(e)} handleSearch={() => searchShop()} />
      </div>
      <AddShopDialogContent
        isSearching={isSearching}
        isSearched={isSearched}
        selectedShopName={selectedShopName}
        setSelectedShopName={setSelectedShopName}
        isDuplicateShopInfo={isDuplicateShopInfo}
        setIsDuplicateShopInfo={setIsDuplicateShopInfo}
        isAddedShopInfo={isAddedShopInfo}
        setIsAddedShopInfo={setIsAddedShopInfo}
        searchResultShopInfoList={searchResultShopInfoList}
        closeDialog={closeDialog}
      />
    </div>
  );
};

export default AddShopDialog;
