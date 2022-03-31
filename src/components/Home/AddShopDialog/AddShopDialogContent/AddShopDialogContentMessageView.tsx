import '@/assets/styles/components/Home/AddShopDialogContentMessageView.scss';

type Props = {
  text: string;
};

const AddShopDialogContentMessageView: React.FC<Props> = ({ text }) => (
  <div className="add-shop-dialog-content-message-view">
    <span className="add-shop-dialog-content-message-view__text">{text}</span>
  </div>
);

export default AddShopDialogContentMessageView;
