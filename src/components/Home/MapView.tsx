import { useState } from 'react';
import '@/assets/styles/components/Home/MapView.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';

type Props = {
  expandView: VoidFunction;
  contractView: VoidFunction;
};

const MapView: React.FC<Props> = ({ expandView, contractView }) => {
  const [isMapViewAreaExpanded, setIsMapViewAreaExpanded] = useState(false);
  const viewAreaScaleButtonImgAlt = isMapViewAreaExpanded ? 'リストを表示する' : '地図エリアを拡大する';
  const handleClickViewAreaScaleButton = () => {
    if (isMapViewAreaExpanded) {
      contractView();
      setIsMapViewAreaExpanded(false);
    } else {
      expandView();
      setIsMapViewAreaExpanded(true);
    }
  };

  return (
    <div className="map-view">
      <button type="button" className="map-view__view-area-scale-button" onClick={handleClickViewAreaScaleButton}>
        <img
          src={IconArrow}
          alt={viewAreaScaleButtonImgAlt}
          className={`map-view__view-area-scale-button__img${
            isMapViewAreaExpanded ? ' map-view__view-area-scale-button__img--map-view-area-expanded' : ''
          }`}
        />
        {isMapViewAreaExpanded && <div className="map-view__view-area-scale-button__text">リストを表示</div>}
      </button>
    </div>
  );
};

export default MapView;
