import '@/assets/styles/components/Home/ShopListView/index.scss';
import { ShopInfo } from '@/firebase';
import ShopList from '@/components/Home/ShopListView/ShopList';

type Props = {
  wishList: ShopInfo[] | undefined;
};

const ShopListView: React.FC<Props> = ({ wishList }) => (
  <div className="shop-list-view">
    <div className="shop-list-view__description">全 {wishList ? wishList.length : 0}件</div>
    {wishList && <ShopList wishList={wishList} />}
  </div>
);

export default ShopListView;
