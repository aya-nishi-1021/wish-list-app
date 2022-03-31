import '@/assets/styles/components/Home/AddShopDialog/AddShopDialogContent/AddShopDialogContentListView.scss';
import { Dispatch, SetStateAction } from 'react';
import { fetchWishList, addWishList } from '@/firebase';
import { SearchResultShopInfo, SearchResultShopInfoList } from '@/components/Home/AddShopDialog';

type Props = {
  setSelectedShopName: Dispatch<SetStateAction<string | null>>;
  setIsDuplicateShopInfo: Dispatch<SetStateAction<boolean>>;
  setIsAddedShopInfo: Dispatch<SetStateAction<boolean>>;
  searchResultShopInfoList: SearchResultShopInfoList;
};

const AddShopDialogContentListView: React.FC<Props> = ({
  searchResultShopInfoList,
  setSelectedShopName,
  setIsDuplicateShopInfo,
  setIsAddedShopInfo,
}) => {
  const handleAddShopInfo = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    placeId: string | undefined,
    shopName: string | undefined
  ) => {
    event.preventDefault();
    if (!placeId || !shopName) return;
    setSelectedShopName(shopName);

    const { google } = window;
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    const wishList = await fetchWishList();
    if (wishList?.some((shopInfo) => shopInfo.placeId === placeId)) {
      setIsDuplicateShopInfo(true);
      setIsAddedShopInfo(true);
      return;
    }

    // MEMO: formatted_phone_number, website, opening_hours.weekday_text は getDetails() でしか取得できない(textSearch() では undefined になる)
    service.getDetails({ placeId }, (r, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if (!r) return;
        void addWishList({
          placeId: r.place_id,
          name: r.name,
          rating: r.rating,
          phoneNumber: r.formatted_phone_number,
          website: r.website,
          isOpen: r.opening_hours?.isOpen(),
          weekdayText: r.opening_hours?.weekday_text,
          address: r.formatted_address,
        });
      }
    });
    setIsAddedShopInfo(true);
  };

  return (
    <div className="add-shop-dialog-content-list-view">
      <div className="add-shop-dialog-content-list-view__shop-number">検索結果 {searchResultShopInfoList.length}件</div>
      <ul className="add-shop-dialog-content-list-view__shop-list">
        {searchResultShopInfoList.map((shopInfo: SearchResultShopInfo) => (
          <button
            type="button"
            className="add-shop-dialog-content-list-view__shop-list-item"
            key={shopInfo.placeId}
            onClick={(e) => handleAddShopInfo(e, shopInfo.placeId, shopInfo.name)}
          >
            <div className="add-shop-dialog-content-list-view__shop-list-item__name">{shopInfo.name}</div>
            <div className="add-shop-dialog-content-list-view__shop-list-item__address">{shopInfo.address}</div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default AddShopDialogContentListView;
