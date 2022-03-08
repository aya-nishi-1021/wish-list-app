import '@/assets/styles/pages/Home.scss';
import Header from '@/components/Common/Header';
import ShopList from '@/components/Home/ShopList';
import MapView from '@/components/Home/MapView';
import BottomNavi from '@/components/Common/BottomNavi';

const Home: React.FC = () => (
  <div className="home">
    <Header isSearchBoxShow isAddShopButtonShow />
    <div className="home__content-wrapper">
      <ShopList />
      <MapView />
    </div>
    <BottomNavi isAddShopButtonShow />
  </div>
);

export default Home;
