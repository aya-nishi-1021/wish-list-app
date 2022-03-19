import '@/assets/styles/components/Home/ShopListView.scss';
import ShopList from './ShopList';

const ShopListView: React.FC = () => (
  <div className="shop-list-view">
    <div className="shop-list-view__description">地図の選択エリアにあるお店 5件</div>
    <ShopList />
  </div>
);

export default ShopListView;
