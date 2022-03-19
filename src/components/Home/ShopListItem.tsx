import '@/assets/styles/components/Home/ShopListItem.scss';

const ShopListItem: React.FC = () => (
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
      <div className="shop-list-item__info__shop-name">お店の名前</div>
      <div className="shop-list-item__info__item">Google の評価: 3.8</div>
      <div className="shop-list-item__info__item">電話: 06-6575-7540</div>
      <div className="shop-list-item__info__item">Webサイト: http://pain-karato.com/</div>
      <div className="shop-list-item__info__item">営業時間: 営業中・営業終了: 20:00 ▼</div>
      <div className="shop-list-item__info__item">住所: 〒541-0041 大阪府大阪市中央区北浜１丁目９−８</div>
    </div>
  </li>
);

export default ShopListItem;
