import '@/assets/styles/components/Home/ShopList.scss';
import ShopListItem from '@/components/Home/ShopListItem';

const ShopList: React.FC = () => (
    <ul className="shop-list">
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
    </ul>
);

export default ShopList;