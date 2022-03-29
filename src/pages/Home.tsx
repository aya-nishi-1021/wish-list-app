import '@/assets/styles/pages/Home.scss';
import { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import Overlay from '@/components/Common/Overlay';
import AddShopDialog from '@/components/Home/AddShopDialog';
import Header from '@/components/Common/Header';
import ShopListView from '@/components/Home/ShopListView';
import MapView from '@/components/Home/MapView';
import BottomNavi from '@/components/Common/BottomNavi';
import ViewToggleButton from '@/components/Home/ViewToggleButton';

const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY as string;

type Libraries = ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[];
const libraries: Libraries = ['places'];

const Home: React.FC = () => {
  const [isAddShopDialogShow, setIsAddShopDialogShow] = useState(false);
  const [isMapView, setIsMapView] = useState(false);

  return (
    <LoadScript googleMapsApiKey={key} libraries={libraries}>
      <div className="home">
        <Overlay isShow={isAddShopDialogShow} hideOverlay={() => setIsAddShopDialogShow(false)}>
          <AddShopDialog closeDialog={() => setIsAddShopDialogShow(false)} />
        </Overlay>
        <Header isSearchBoxShow isAddShopButtonShow handleAddShop={() => setIsAddShopDialogShow(true)} />
        <div className="home__content-wrapper">
          <div className={`home__shop-list-view-wrapper${isMapView ? ' home__shop-list-view-wrapper--map-view' : ''}`}>
            <ShopListView />
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
              showShopListView={() => setIsMapView(false)}
              showMapView={() => setIsMapView(true)}
            />
          </div>
        </div>
        <BottomNavi isAddShopButtonShow handleAddShop={() => setIsAddShopDialogShow(true)} />
      </div>
    </LoadScript>
  );
};

export default Home;
