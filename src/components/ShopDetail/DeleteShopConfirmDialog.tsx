import '@/assets/styles/components/ShopDetail/DeleteShopConfirmDialog.scss';
import IconClose from '@/assets/images/icon_close.svg';

type Props = {
  handleCloseDialog: VoidFunction;
};

const DeleteShopConfirmDialog: React.FC<Props> = ({ handleCloseDialog }) => (
  <div className="delete-shop-confirm-dialog">
    <button type="button" onClick={handleCloseDialog} className="delete-shop-confirm-dialog__close-button">
      <img src={IconClose} alt="ダイアログを閉じる" />
    </button>
    <div className="delete-shop-confirm-dialog__description">このお店をリストから削除していいですか？</div>
    <div className="delete-shop-confirm-dialog__button-wrapper">
      <button type="button" className="delete-shop-confirm-dialog__cancel-button" onClick={handleCloseDialog}>
        キャンセル
      </button>
      <button type="button" className="delete-shop-confirm-dialog__execute-button">
        削除する
      </button>
    </div>
  </div>
);

export default DeleteShopConfirmDialog;