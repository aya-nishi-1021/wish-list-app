import '@/assets/styles/components/Home/ShopListView/ShopList.scss';
import { ShopInfo } from '@/firebase';
import ShopListItem from '@/components/Home/ShopListView/ShopListItem';

type Props = {
  shopList: ShopInfo[];
};

const ShopList: React.FC<Props> = ({ shopList }) => (
  <ul className="shop-list">
    {shopList.map((shopInfo: ShopInfo) => (
      <ShopListItem shopInfo={shopInfo} key={shopInfo.placeId} />
    ))}
  </ul>
);

export default ShopList;
