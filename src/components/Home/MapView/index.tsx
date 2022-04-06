import '@/assets/styles/components/Home/MapView/index.scss';
import { useState, useCallback, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import { ShopInfo } from '@/firebase';
import IconArrow from '@/assets/images/icon_arrow.svg';
import IconPin from '@/assets/images/icon_pin.svg';
import IconPinSelected from '@/assets/images/icon_pin_selected.svg';
import InfoWindowContent from '@/components/Home/MapView/InfoWindowContent';

type Props = {
  isMapView: boolean;
  wishList: ShopInfo[] | undefined;
  selectedShop: ShopInfo | null;
  setSelectedShop: Dispatch<SetStateAction<ShopInfo | null>>;
  searchedShopList: ShopInfo[] | null;
  isMapViewExpanded: boolean;
  expandView: VoidFunction;
  contractView: VoidFunction;
};

const MapView: React.FC<Props> = ({
  isMapView,
  wishList,
  selectedShop,
  setSelectedShop,
  searchedShopList,
  isMapViewExpanded,
  expandView,
  contractView,
}) => {
  const viewAreaScaleButtonImgAlt = isMapViewExpanded ? 'リストを表示する' : '地図エリアを拡大する';
  const handleScaleMapView = () => {
    if (isMapViewExpanded) {
      contractView();
    } else {
      expandView();
    }
  };

  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  const defaultCenter = useMemo(
    () => ({
      // 京都駅の緯度経度
      lat: 34.985849,
      lng: 135.758767,
    }),
    []
  );
  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  const displayShopList = searchedShopList || wishList;

  const [map, setMap] = useState<google.maps.Map>();
  const onLoad = useCallback((map: google.maps.Map) => setMap(map), []);

  useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds();
    if (map && (!displayShopList || (displayShopList && displayShopList.length === 0))) {
      bounds.extend(defaultCenter);
      map.setCenter(bounds.getCenter());
      map.setZoom(14);
    }
    if (map && displayShopList && displayShopList.length === 1) {
      bounds.extend(displayShopList[0].position);
      map.setCenter(displayShopList[0].position);
      map.setZoom(14);
    }
    if (map && !selectedShop && displayShopList && displayShopList.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      displayShopList.forEach((shopInfo: ShopInfo) => {
        bounds.extend(shopInfo.position);
      });
      map.fitBounds(bounds);
    }
  }, [isMapView, map, displayShopList, defaultCenter, selectedShop]);

  const handleSelectShop = (event: google.maps.MapMouseEvent, shopInfo: ShopInfo) => {
    event.stop();
    setSelectedShop(shopInfo);
    focusSelectedShop(shopInfo);
  };

  // 選択したお店のピンを中心にしてズームする
  const focusSelectedShop = (shopInfo: ShopInfo) => {
    if (map) {
      map.setCenter(shopInfo.position);
      map.setZoom(16);
    }
  };

  // マップ上のピンを選択中 かつ SP/TB の場合に表示する
  const isInfoWindowShow = selectedShop && window.screen.width <= 768;

  return (
    <div className="map-view">
      <button type="button" className="map-view__view-area-scale-button" onClick={handleScaleMapView}>
        <img
          src={IconArrow}
          alt={viewAreaScaleButtonImgAlt}
          className={`map-view__view-area-scale-button__img${
            isMapViewExpanded ? ' map-view__view-area-scale-button__img--map-view-area-expanded' : ''
          }`}
        />
        {isMapViewExpanded && <div className="map-view__view-area-scale-button__text">リストを表示</div>}
      </button>
      <div className="map-view__map-wrapper">
        <GoogleMap mapContainerStyle={containerStyle} clickableIcons={false} options={options} onLoad={onLoad}>
          {displayShopList &&
            displayShopList.map((shopInfo: ShopInfo) => (
              <Marker
                position={shopInfo.position}
                key={shopInfo.placeId}
                icon={{
                  url: selectedShop && selectedShop.placeId === shopInfo.placeId ? IconPinSelected : IconPin,
                  scaledSize: new google.maps.Size(32, 48),
                }}
                onClick={(e) => handleSelectShop(e, shopInfo)}
              />
            ))}
          {isInfoWindowShow && (
            <InfoWindow position={selectedShop.position} onCloseClick={() => setSelectedShop(null)}>
              <InfoWindowContent shopInfo={selectedShop} />
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapView;
