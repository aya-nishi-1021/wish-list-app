import '@/assets/styles/components/Home/ViewToggleButton.scss';

type Props = {
  isShopListView: boolean;
  showShopListView: VoidFunction;
  showMapView: VoidFunction;
};

const ViewToggleButton: React.FC<Props> = ({ isShopListView, showShopListView, showMapView }) => {
  const text = isShopListView ? 'マップ' : 'リスト';
  const handleChangeView = () => {
    if (isShopListView) {
      showMapView();
    } else {
      showShopListView();
    }
  };

  return (
    <button className="view-toggle-button" type="button" onClick={handleChangeView}>
      {text}
    </button>
  );
};

export default ViewToggleButton;
