import '@/assets/styles/components/Home/ViewToggleButton.scss';

type Props = {
  isShopListView: boolean;
  handleShowShopListView: VoidFunction;
  handleShowMapView: VoidFunction;
};

const ViewToggleButton: React.FC<Props> = ({ isShopListView, handleShowShopListView, handleShowMapView }) => {
  const text = isShopListView ? 'マップ' : 'リスト';
  const handleChangeView = () => {
    if (isShopListView) {
      handleShowMapView();
    } else {
      handleShowShopListView();
    }
  };

  return (
    <button className="view-toggle-button" type="button" onClick={handleChangeView}>
      {text}
    </button>
  );
};

export default ViewToggleButton;
