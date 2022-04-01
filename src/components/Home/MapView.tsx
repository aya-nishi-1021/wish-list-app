import '@/assets/styles/components/Home/MapView.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';

type Props = {
  isMapViewExpanded: boolean;
  expandView: VoidFunction;
  contractView: VoidFunction;
};

const MapView: React.FC<Props> = ({ isMapViewExpanded, expandView, contractView }) => {
  const viewAreaScaleButtonImgAlt = isMapViewExpanded ? 'リストを表示する' : '地図エリアを拡大する';
  const handleScaleMapView = () => {
    if (isMapViewExpanded) {
      contractView();
    } else {
      expandView();
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
    </div>
  );
};

export default MapView;
