import '@/assets/styles/components/Home/ShopListView/ShopList.scss';
import { ShopInfo } from '@/firebase';
import ShopListItem from '@/components/Home/ShopListView/ShopListItem';

type Props = {
  wishList: ShopInfo[];
};

const ShopList: React.FC<Props> = ({ wishList }) => (
  <ul className="shop-list">
    {wishList.map((shopInfo: ShopInfo) => (
      <ShopListItem shopInfo={shopInfo} key={shopInfo.placeId} />
    ))}
  </ul>
);

export default ShopList;
