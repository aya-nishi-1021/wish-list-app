import '@/assets/styles/components/Home/ShopListView.scss';
import ShopListItem from '@/components/Home/ShopListItem';

const ShopListView: React.FC = () => (
  <div className="shop-list-view">
    <ul className="shop-list">
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
    </ul>
  </div>
);

export default ShopListView;
