import '@/assets/styles/components/Home/MapView.scss';
import { useState, useCallback, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { ShopInfo } from '@/firebase';
import IconArrow from '@/assets/images/icon_arrow.svg';
import IconPin from '@/assets/images/icon_pin.svg';
import IconPinSelected from '@/assets/images/icon_pin_selected.svg';

type Props = {
  wishList: ShopInfo[] | undefined;
  selectedShop: ShopInfo | null;
  isMapViewExpanded: boolean;
  expandView: VoidFunction;
  contractView: VoidFunction;
  setSelectedShop: Dispatch<SetStateAction<ShopInfo | null>>;
};

const MapView: React.FC<Props> = ({
  wishList,
  selectedShop,
  isMapViewExpanded,
  expandView,
  contractView,
  setSelectedShop,
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

  const [map, setMap] = useState<google.maps.Map>();
  const onLoad = useCallback((map: google.maps.Map) => setMap(map), []);

  useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds();
    if (map && (!wishList || (wishList && wishList.length === 0))) {
      bounds.extend(defaultCenter);
      map.setCenter(bounds.getCenter());
      map.setZoom(14);
    }
    if (map && wishList && wishList.length === 1) {
      bounds.extend(wishList[0].position);
      map.setCenter(wishList[0].position);
      map.setZoom(14);
    }
    if (map && !selectedShop && wishList && wishList.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      wishList.forEach((shopInfo: ShopInfo) => {
        bounds.extend(shopInfo.position);
      });
      map.fitBounds(bounds);
    }
  }, [map, wishList, defaultCenter, selectedShop]);

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
          {wishList &&
            wishList.map((shopInfo: ShopInfo) => (
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
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapView;
