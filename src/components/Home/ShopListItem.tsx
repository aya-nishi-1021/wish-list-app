import '@/assets/styles/components/Home/ShopListItem.scss';
import { ShopInfo } from '@/firebase';

type Props = {
  shopInfo: ShopInfo;
};

const ShopListItem: React.FC<Props> = ({ shopInfo }) => (
  <li className="shop-list-item">
    <div className="shop-list-item__image-wrapper">
      <div className="shop-list-item__main-image">ダミー画像1</div>
      <div className="shop-list-item__sub-image-wrapper">
        <div className="shop-list-item__sub-image">ダミー画像2</div>
        <div className="shop-list-item__sub-image">ダミー画像3</div>
        <div className="shop-list-item__sub-image">ダミー画像4</div>
      </div>
    </div>
    <div className="shop-list-item__info-wrapper">
      <div className="shop-list-item__info__shop-name">{shopInfo.name}</div>
      <div className="shop-list-item__info__item">Google の評価: {shopInfo.rating}</div>
      <div className="shop-list-item__info__item">電話: {shopInfo.phoneNumber}</div>
      <div className="shop-list-item__info__item">
        Webサイト:{' '}
        <a href={shopInfo.website} target="_blank" rel="noopener noreferrer">
          {shopInfo.website}
        </a>
      </div>
      <div className="shop-list-item__info__item">営業時間: {shopInfo.isOpen ? '営業中' : '営業時間外'} ▼</div>
      <div className="shop-list-item__info__item">住所: {shopInfo.address}</div>
    </div>
  </li>
);

export default ShopListItem;
