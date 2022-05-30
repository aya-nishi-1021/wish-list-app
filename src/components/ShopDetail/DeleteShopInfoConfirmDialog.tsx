import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/components/ShopDetail/DeleteShopConfirmDialog.scss';
import IconClose from '@/assets/images/icon_close.svg';
import { deleteShopInfoFromWishList } from '@/firebase';

type Props = {
  shopName: string | undefined;
  closeDialog: VoidFunction;
  shopInfoPlaceId: string | undefined;
};

const DeleteShopInfoConfirmDialog: React.FC<Props> = ({ shopName, closeDialog, shopInfoPlaceId }) => {
  const navigate = useNavigate();
  const [isDeleteShopInfoCompleted, setIsDeleteShopInfoCompleted] = useState(false);

  const handleExecute = async () => {
    await deleteShopInfoFromWishList(shopInfoPlaceId).then(() => {
      setIsDeleteShopInfoCompleted(true);
      setTimeout(() => {
        closeDialog();
        navigate('/');
      }, 1500);
    });
  };

  return (
    <div className="delete-shop-info-confirm-dialog">
      <button type="button" onClick={closeDialog} className="delete-shop-info-confirm-dialog__close-button">
        <img src={IconClose} alt="ダイアログを閉じる" />
      </button>
      {isDeleteShopInfoCompleted && (
        <div className="delete-shop-info-confirm-dialog__message">{shopName} をリストから削除しました</div>
      )}
      {!isDeleteShopInfoCompleted && (
        <>
          <div className="delete-shop-info-confirm-dialog__description">
            {shopName} をリストから削除していいですか？
          </div>
          <div className="delete-shop-info-confirm-dialog__button-wrapper">
            <button type="button" className="delete-shop-info-confirm-dialog__cancel-button" onClick={closeDialog}>
              キャンセル
            </button>
            <button type="button" className="delete-shop-info-confirm-dialog__execute-button" onClick={handleExecute}>
              削除する
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeleteShopInfoConfirmDialog;
