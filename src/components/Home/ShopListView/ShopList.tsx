import '@/assets/styles/components/Home/ShopListView/ShopList.scss';
import { ShopInfo } from '@/firebase';
import ShopListItem from '@/components/Home/ShopListView/ShopListItem';

type Props = {
  shopList: ShopInfo[];
  fetchAndSetWishList: VoidFunction;
};

const ShopList: React.FC<Props> = ({ shopList, fetchAndSetWishList }) => (
  <ul className="shop-list">
    {shopList.map((shopInfo: ShopInfo) => (
      <ShopListItem shopInfo={shopInfo} key={shopInfo.placeId} updateShopInfo={fetchAndSetWishList} />
    ))}
  </ul>
);

export default ShopList;
