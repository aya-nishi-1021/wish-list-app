import '@/assets/styles/components/Home/AddShopDialog.scss';
import IconClose from '@/assets/images/icon_close.svg';

type Props = {
  closeDialog: VoidFunction;
};

const AddShopDialog: React.FC<Props> = ({ closeDialog }) => (
  <div className="add-shop-dialog">
    <button type="button" onClick={closeDialog} className="add-shop-dialog__close-button">
      <img src={IconClose} alt="ダイアログを閉じる" />
    </button>
  </div>
);

export default AddShopDialog;
