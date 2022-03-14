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
    <div className="add-shop-dialog__shop-number">検索結果 ◯件</div>
    <ul className="add-shop-dialog__shop-list">
      <li className="add-shop-dialog__shop-list-item">
        <div className="add-shop-dialog__shop-list-item__name">お店の名前A</div>
        <div className="add-shop-dialog__shop-list-item__address">住所: xxxxxxxxxx</div>
      </li>
      <li className="add-shop-dialog__shop-list-item">
        <div className="add-shop-dialog__shop-list-item__name">お店の名前B</div>
        <div className="add-shop-dialog__shop-list-item__address">住所: xxxxxxxxxx</div>
      </li>
      <li className="add-shop-dialog__shop-list-item">
        <div className="add-shop-dialog__shop-list-item__name">お店の名前C</div>
        <div className="add-shop-dialog__shop-list-item__address">住所: xxxxxxxxxx</div>
      </li>
      <li className="add-shop-dialog__shop-list-item">
        <div className="add-shop-dialog__shop-list-item__name">お店の名前D</div>
        <div className="add-shop-dialog__shop-list-item__address">住所: xxxxxxxxxx</div>
      </li>
      <li className="add-shop-dialog__shop-list-item">
        <div className="add-shop-dialog__shop-list-item__name">お店の名前E</div>
        <div className="add-shop-dialog__shop-list-item__address">住所: xxxxxxxxxx</div>
      </li>
      <li className="add-shop-dialog__shop-list-item">
        <div className="add-shop-dialog__shop-list-item__name">お店の名前F</div>
        <div className="add-shop-dialog__shop-list-item__address">住所: xxxxxxxxxx</div>
      </li>
    </ul>
  </div>
);

export default AddShopDialog;
