import '@/assets/styles/pages/Home.scss';
import { useEffect, useState } from 'react';
import { fetchWishList, fetchWishListByRating, ShopInfo } from '@/firebase';
import Overlay from '@/components/Common/Overlay';
import AddShopDialog from '@/components/Home/AddShopDialog';
import HomeHeader from '@/components/Home/HomeHeader';
import ShopListView from '@/components/Home/ShopListView';
import MapView from '@/components/Home/MapView';
import BottomNavi from '@/components/Common/BottomNavi';
import ViewToggleButton from '@/components/Home/ViewToggleButton';

const Home: React.FC = () => {
  const [wishList, setWishList] = useState<ShopInfo[] | undefined>([]);
  const [isAddShopDialogShow, setIsAddShopDialogShow] = useState(false);
  const [isMapView, setIsMapView] = useState(false);
  // マップ上でクリックしたお店
  const [selectedShop, setSelectedShop] = useState<ShopInfo | null>(null);
  // ホーム画面で検索したお店
  const [searchedShopList, setSearchedShopList] = useState<ShopInfo[] | null>(null);
  const [searchText, setSearchText] = useState('');
  const [isOrderedByRating, setIsOrderedByRating] = useState(false);

  useEffect(() => {
    void fetchAndSetWishList(isOrderedByRating);
  }, [isOrderedByRating]);

  const fetchAndSetWishList = async (isOrderedByRating: boolean) => {
    let data;
    if (isOrderedByRating) {
      data = await fetchWishListByRating();
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
    <div className="home">
      <Overlay isShow={isAddShopDialogShow} hideOverlay={closeDialog}>
        <AddShopDialog closeDialog={closeDialog} />
      </Overlay>
      <HomeHeader
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchedShopList={setSearchedShopList}
        setSelectedShop={setSelectedShop}
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
            isOrderedByRating={isOrderedByRating}
            setIsOrderedByRating={setIsOrderedByRating}
            fetchAndSetWishList={() => fetchAndSetWishList(isOrderedByRating)}
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
            isMapView={isMapView}
            showShopListView={() => setIsMapView(false)}
            showMapView={() => setIsMapView(true)}
          />
        </div>
      </div>
      <BottomNavi isAddShopButtonShow handleAddShop={() => setIsAddShopDialogShow(true)} />
    </div>
  );
};

export default Home;
