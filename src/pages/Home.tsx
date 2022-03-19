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
  const [isMapViewExpanded, setIsMapViewExpanded] = useState(false);

  return (
    <div className="home">
      <Overlay isShow={isAddShopDialogShow} hideOverlay={() => setIsAddShopDialogShow(false)}>
        <AddShopDialog closeDialog={() => setIsAddShopDialogShow(false)} />
      </Overlay>
      <Header isSearchBoxShow isAddShopButtonShow handleClickAddShopButton={() => setIsAddShopDialogShow(true)} />
      <div className="home__content-wrapper">
        <div
          className={`home__shop-list-wrapper${isMapViewExpanded ? ' home__shop-list-wrapper--map-view-expanded' : ''}`}
        >
          <ShopList />
        </div>
        <div
          className={`home__map-view-wrapper${isMapViewExpanded ? ' home__map-view-wrapper--map-view-expanded' : ''}`}
        >
          <MapView expandView={() => setIsMapViewExpanded(true)} contractView={() => setIsMapViewExpanded(false)} />
        </div>
      </div>
      <BottomNavi isAddShopButtonShow handleClickAddShopButton={() => setIsAddShopDialogShow(true)} />
    </div>
  );
};

export default Home;
