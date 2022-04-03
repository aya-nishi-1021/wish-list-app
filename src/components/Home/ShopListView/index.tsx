import '@/assets/styles/components/Home/ShopListView/index.scss';
import { Dispatch, SetStateAction } from 'react';
import { ShopInfo } from '@/firebase';
import ShopList from '@/components/Home/ShopListView/ShopList';
import IconArrow from '@/assets/images/icon_arrow.svg';

type Props = {
  wishList: ShopInfo[] | undefined;
  selectedShop: ShopInfo | null;
  setSelectedShop: Dispatch<SetStateAction<ShopInfo | null>>;
};

const ShopListView: React.FC<Props> = ({ wishList, selectedShop, setSelectedShop }) => {
  const description = selectedShop ? '選択中のお店' : `全 ${wishList ? wishList.length : 0}件`;
  let shopList: ShopInfo[];
  if (selectedShop) {
    shopList = [selectedShop];
  } else if (wishList) {
    shopList = wishList;
  } else {
    shopList = [];
  }

  return (
    <div className="shop-list-view">
      <div className="shop-list-view__navi">
        <div className="shop-list-view__description">{description}</div>
        {selectedShop && (
          <button className="shop-list-view__show-all-button" type="button" onClick={() => setSelectedShop(null)}>
            <img src={IconArrow} alt="一覧に戻る" />
            一覧に戻る
          </button>
        )}
      </div>
      <ShopList shopList={shopList} />
    </div>
  );
};

export default ShopListView;
