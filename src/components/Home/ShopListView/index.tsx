import '@/assets/styles/components/Home/ShopListView/index.scss';
import { Dispatch, SetStateAction } from 'react';
import { ShopInfo } from '@/firebase';
import ShopList from '@/components/Home/ShopListView/ShopList';
import IconArrow from '@/assets/images/icon_arrow.svg';

type Props = {
  wishList: ShopInfo[] | undefined;
  selectedShop: ShopInfo | null;
  setSelectedShop: Dispatch<SetStateAction<ShopInfo | null>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  searchedShopList: ShopInfo[] | null;
  setSearchedShopList: Dispatch<SetStateAction<ShopInfo[] | null>>;
  isOrderedByRating: boolean;
  setIsOrderedByRating: Dispatch<SetStateAction<boolean>>;
  fetchAndSetWishList: VoidFunction;
};

const ShopListView: React.FC<Props> = ({
  wishList,
  selectedShop,
  setSelectedShop,
  setSearchText,
  searchedShopList,
  setSearchedShopList,
  isOrderedByRating,
  setIsOrderedByRating,
  fetchAndSetWishList,
}) => {
  let description: string;
  let displayShopList: ShopInfo[];
  if (selectedShop) {
    description = '選択中のお店';
    displayShopList = [selectedShop];
  } else if (searchedShopList) {
    description = `検索結果 ${searchedShopList.length}件`;
    displayShopList = searchedShopList;
  } else if (wishList) {
    description = `全 ${wishList.length}件`;
    displayShopList = wishList;
  } else {
    description = '全0件';
    displayShopList = [];
  }

  const isAllShopShow = !selectedShop && !searchedShopList;

  const handleResetShopList = () => {
    setSelectedShop(null);
    setSearchedShopList(null);
    setSearchText('');
  };

  return (
    <div className="shop-list-view">
      <div className="shop-list-view__navi">
        <div className="shop-list-view__description">{description}</div>
        {!isAllShopShow && (
          <button className="shop-list-view__show-all-button" type="button" onClick={handleResetShopList}>
            <img src={IconArrow} alt="一覧に戻る" />
            一覧に戻る
          </button>
        )}
      </div>
      {isAllShopShow && displayShopList.length > 0 && (
        <div className="shop-list-view__order">
          <button
            type="button"
            className={`shop-list-view__order-button${
              isOrderedByRating ? ' shop-list-view__order-button--selected' : ''
            }`}
            onClick={() => setIsOrderedByRating(!isOrderedByRating)}
          >
            評価順
          </button>
        </div>
      )}
      <ShopList shopList={displayShopList} fetchAndSetWishList={fetchAndSetWishList} />
    </div>
  );
};

export default ShopListView;
