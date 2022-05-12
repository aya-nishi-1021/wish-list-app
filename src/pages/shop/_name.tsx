import '@/assets/styles/pages/_name.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopInfo } from '@/firebase';
import Header from '@/components/Common/Header';
import ToHomeLink from '@/components/Common/ToHomeLink';
import BottomNavi from '@/components/Common/BottomNavi';

const ShopDetail: React.FC = () => {
  const location = useLocation();
  const { shopInfo } = location.state as { shopInfo: ShopInfo };
  const { isOpen } = location.state as { isOpen: boolean };

  const [isOpeningHoursShow, setIsOpeningHoursShow] = useState(false);
  const [shopImages, setShopImages] = useState<string[]>([]);

  const handleToggleOpeningHours = () => {
    setIsOpeningHoursShow(!isOpeningHoursShow);
  };

  const { google } = window;
  const service = new google.maps.places.PlacesService(document.createElement('div'));

  if (!shopInfo.placeId) return null;
  service.getDetails({ placeId: shopInfo.placeId }, (r, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      if (!r) return;
      setShopImages(r.photos ? r.photos.map((photo) => photo.getUrl()) : []);
    }
  });

  return (
    <div className="shop-detail">
      <Header headingText="お店詳細" />
      <div className="shop-detail__to-home-link">
        <ToHomeLink />
      </div>
      <div className="shop-detail__content-wrapper">
        <div className="shop-detail__name">{shopInfo.name}</div>
        <div className="shop-detail__item">Google の評価: {shopInfo.rating || '-'}</div>
        <div className="shop-detail__item">
          電話: {shopInfo.phoneNumber ? <a href={`tel:${shopInfo.phoneNumber}`}>{shopInfo.phoneNumber}</a> : '-'}
        </div>
        <div className="shop-detail__item">
          Webサイト:{' '}
          {shopInfo.website ? (
            <a href={shopInfo.website} target="_blank" rel="noopener noreferrer">
              {shopInfo.website}
            </a>
          ) : (
            '-'
          )}
        </div>
        <div className="shop-detail__item">
          営業時間: {isOpen ? '営業中' : '営業時間外'}
          {shopInfo.weekdayText && (
            <button type="button" onClick={handleToggleOpeningHours}>
              {isOpeningHoursShow ? '▲' : '▼'}
            </button>
          )}
        </div>
        {shopInfo.weekdayText && isOpeningHoursShow && (
          <ul className="shop-detail__item__opening-hours">
            {shopInfo.weekdayText.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
        <div className="shop-detail__item">住所: {shopInfo.address || '-'}</div>
        <div className="shop-detail__image-wrapper">
          {shopImages.map((image) => (
            <div className="shop-detail__image" key={image}>
              <img src={image} alt="お店の写真" />
            </div>
          ))}
        </div>
      </div>
      <BottomNavi isAddShopButtonShow={false} />
    </div>
  );
};

export default ShopDetail;
