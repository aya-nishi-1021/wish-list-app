import '@/assets/styles/pages/Home.scss';
import { useState } from 'react';
import Overlay from '@/components/Common/Overlay';
import AddShopDialog from '@/components/Home/AddShopDialog';
import Header from '@/components/Common/Header';
import ShopList from '@/components/Home/ShopList';
import MapView from '@/components/Home/MapView';
import BottomNavi from '@/components/Common/BottomNavi';

const Home: React.FC = () => {
  const [isAddShopDialogShow, setIsAddShopDialogShow] = useState(false);

  return (
    <div className="home">
      <Overlay isShow={isAddShopDialogShow} hideOverlay={() => setIsAddShopDialogShow(false)}>
        <AddShopDialog />
      </Overlay>
      <Header isSearchBoxShow isAddShopButtonShow handleClickAddShopButton={() => setIsAddShopDialogShow(true)} />
      <div className="home__content-wrapper">
        <ShopList />
        <MapView />
      </div>
      <BottomNavi isAddShopButtonShow />
    </div>
  );
};

export default Home;
