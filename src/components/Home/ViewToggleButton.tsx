import '@/assets/styles/components/Home/ViewToggleButton.scss';

type Props = {
  isShopListView: boolean;
  showShopList: VoidFunction;
  showMapView: VoidFunction;
};

const ViewToggleButton: React.FC<Props> = ({ isShopListView, showShopList, showMapView }) => {
  const text = isShopListView ? 'マップ' : 'リスト';
  const handleClickViewToggleButton = () => {
    if (isShopListView) {
      showMapView();
    } else {
      showShopList();
    }
  };

  return (
    <button className="view-toggle-button" type="button" onClick={handleClickViewToggleButton}>
      {text}
    </button>
  );
};

export default ViewToggleButton;
