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
  const [isAddShopDialogShow, setIsAddShopDialogShow] = useState(false);
  const [isMapView, setIsMapView] = useState(false);
  // マップ上でクリックしたお店
  const [selectedShop, setSelectedShop] = useState<ShopInfo | null>(null);
  // ホーム画面で検索したお店
  const [searchedShopList, setSearchedShopList] = useState<ShopInfo[]>([]);
  const [searchText, setSearchText] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    void fetchAndSetWishList(isOrdered);
  }, [isOrdered]);

  const fetchAndSetWishList = async (isOrdered: boolean) => {
    let data;
    if (isOrdered) {
      data = await fetchWishList('rating');
    } else {
      data = await fetchWishList();
    }
    setWishList(data as ShopInfo[]);
  };

  const closeDialog = async () => {
    setIsAddShopDialogShow(false);
    const data = await fetchWishList();
    setWishList(data as ShopInfo[]);
  };

  return (
    <LoadScript googleMapsApiKey={key} libraries={libraries}>
      <div className="home">
        <Overlay isShow={isAddShopDialogShow} hideOverlay={closeDialog}>
          <AddShopDialog handleCloseDialog={closeDialog} />
        </Overlay>
        <Header
          isSearchBoxShow
          searchText={searchText}
          setSearchText={setSearchText}
          setSearchedShopList={setSearchedShopList}
          setSelectedShop={setSelectedShop}
          isAddShopButtonShow
          handleAddShop={() => setIsAddShopDialogShow(true)}
        />
        <div className="home__content-wrapper">
          <div className={`home__shop-list-view-wrapper${isMapView ? ' home__shop-list-view-wrapper--map-view' : ''}`}>
            <ShopListView
              wishList={wishList}
              selectedShop={selectedShop}
              setSelectedShop={setSelectedShop}
              setSearchText={setSearchText}
              searchedShopList={searchedShopList}
              setSearchedShopList={setSearchedShopList}
              isOrdered={isOrdered}
              setIsOrdered={setIsOrdered}
            />
          </div>
          <div className={`home__map-view-wrapper${isMapView ? ' home__map-view-wrapper--map-view' : ''}`}>
            <MapView
              isMapView={isMapView}
              wishList={wishList}
              selectedShop={selectedShop}
              setSelectedShop={setSelectedShop}
              searchedShopList={searchedShopList}
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
