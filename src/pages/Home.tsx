import Header from '@/components/Common/Header';
import BottomNavi from '@/components/Common/BottomNavi';

const Home: React.FC = () => (
  <div className="home">
    <Header isSearchBoxShow isAddShopButtonShow />
    <BottomNavi isAddShopButtonShow />
  </div>
);

export default Home;
