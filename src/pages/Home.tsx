import '@/assets/styles/pages/Home.scss';
import { useState } from 'react';
import Overlay from '@/components/Common/Overlay';
import AddShopDialog from '@/components/Home/AddShopDialog';
import Header from '@/components/Common/Header';
import ShopList from '@/components/Home/ShopList';
import MapView from '@/components/Home/MapView';
import BottomNavi from '@/components/Common/BottomNavi';
import ViewToggleButton from '@/components/Home/ViewToggleButton';

const Home: React.FC = () => {
  const [isAddShopDialogShow, setIsAddShopDialogShow] = useState(false);
  const [isMapView, setIsMapView] = useState(false);

  return (
    <div className="home">
      <Overlay isShow={isAddShopDialogShow} hideOverlay={() => setIsAddShopDialogShow(false)}>
        <AddShopDialog closeDialog={() => setIsAddShopDialogShow(false)} />
      </Overlay>
      <Header isSearchBoxShow isAddShopButtonShow handleClickAddShopButton={() => setIsAddShopDialogShow(true)} />
      <div className="home__content-wrapper">
        <div className={`home__shop-list-wrapper${isMapView ? ' home__shop-list-wrapper--map-view' : ''}`}>
          <ShopList />
        </div>
        <div className={`home__map-view-wrapper${isMapView ? ' home__map-view-wrapper--map-view' : ''}`}>
          <MapView
            isMapViewExpanded={isMapView}
            expandView={() => setIsMapView(true)}
            contractView={() => setIsMapView(false)}
          />
        </div>
        <div className="home__view-toggle-button-wrapper">
          <ViewToggleButton
            isShopListView={!isMapView}
            showShopList={() => setIsMapView(false)}
            showMapView={() => setIsMapView(true)}
          />
        </div>
      </div>
      <BottomNavi isAddShopButtonShow handleClickAddShopButton={() => setIsAddShopDialogShow(true)} />
    </div>
  );
};

export default Home;
