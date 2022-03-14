import '@/assets/styles/components/Home/AddShopDialog.scss';
import IconClose from '@/assets/images/icon_close.svg';
import SearchBox from '@/components/Common/SearchBox';

type Props = {
  closeDialog: VoidFunction;
};

const AddShopDialog: React.FC<Props> = ({ closeDialog }) => (
  <div className="add-shop-dialog">
    <button type="button" onClick={closeDialog} className="add-shop-dialog__close-button">
      <img src={IconClose} alt="ダイアログを閉じる" />
    </button>
    <div className="add-shop-dialog__search-box-wrapper">
      <SearchBox />
    </div>
  </div>
);

export default AddShopDialog;
