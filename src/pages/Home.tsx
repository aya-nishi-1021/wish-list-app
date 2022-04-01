import '@/assets/styles/pages/Home.scss';
import { useEffect, useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { fetchWishList, ShopInfo } from '@/firebase';
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
  const [wishList, setWishList] = useState<ShopInfo[] | undefined>([]);

  useEffect(() => {
    const f = async () => {
      const data = await fetchWishList();
      setWishList(data as ShopInfo[]);
    };
    void f();
  }, []);

  const [isAddShopDialogShow, setIsAddShopDialogShow] = useState(false);
  const [isMapView, setIsMapView] = useState(false);

  const handleCloseDialog = async () => {
    setIsAddShopDialogShow(false);
    const data = await fetchWishList();
    setWishList(data as ShopInfo[]);
  };

  return (
    <LoadScript googleMapsApiKey={key} libraries={libraries}>
      <div className="home">
        <Overlay isShow={isAddShopDialogShow} hideOverlay={handleCloseDialog}>
          <AddShopDialog closeDialog={handleCloseDialog} />
        </Overlay>
        <Header isSearchBoxShow isAddShopButtonShow handleAddShop={() => setIsAddShopDialogShow(true)} />
        <div className="home__content-wrapper">
          <div className={`home__shop-list-view-wrapper${isMapView ? ' home__shop-list-view-wrapper--map-view' : ''}`}>
            <ShopListView wishList={wishList} />
          </div>
          <div className={`home__map-view-wrapper${isMapView ? ' home__map-view-wrapper--map-view' : ''}`}>
            <MapView
              isMapViewExpanded={isMapView}
              handleExpandView={() => setIsMapView(true)}
              handleContractView={() => setIsMapView(false)}
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
