import '@/assets/styles/components/Home/ViewToggleButton.scss';

type Props = {
  isMapView: boolean;
  showShopListView: VoidFunction;
  showMapView: VoidFunction;
};

const ViewToggleButton: React.FC<Props> = ({ isMapView, showShopListView, showMapView }) => {
  const text = isMapView ? 'リスト' : 'マップ';
  const handleChangeView = () => {
    if (isMapView) {
      showShopListView();
    } else {
      showMapView();
    }
  };

  return (
    <button className="view-toggle-button" type="button" onClick={handleChangeView}>
      {text}
    </button>
  );
};

export default ViewToggleButton;
