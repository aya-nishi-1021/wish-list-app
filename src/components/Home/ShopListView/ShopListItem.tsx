import '@/assets/styles/components/Home/ShopListView/ShopListItem.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopInfo } from '@/firebase';

type Props = {
  shopInfo: ShopInfo;
};

const ShopListItem: React.FC<Props> = ({ shopInfo }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpeningHoursShow, setIsOpeningHoursShow] = useState(false);

  const { google } = window;
  const service = new google.maps.places.PlacesService(document.createElement('div'));

  if (!shopInfo.placeId) return null;
  service.getDetails({ placeId: shopInfo.placeId }, (r, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      if (!r) return;
      if (!r.opening_hours) return;
      setIsOpen(r.opening_hours.isOpen() || false);
    }
  });
  const handleToggleOpeningHours = () => {
    setIsOpeningHoursShow(!isOpeningHoursShow);
  };

  const subImages = [shopInfo.images[1], shopInfo.images[2], shopInfo.images[3]];

  const handleToShopDetail = () => {
    if (!shopInfo.name) return;
    navigate(`/shop/${shopInfo.name}`, {
      state: {
        shopInfo,
      },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') handleToShopDetail();
  };

  return (
    <div
      className="shop-list-item"
      onClick={handleToShopDetail}
      onKeyDown={(e) => handleKeyDown(e)}
      role="button"
      tabIndex={0}
    >
      <div className="shop-list-item__image-wrapper">
        <div className="shop-list-item__main-image">
          {shopInfo.images[0] ? (
            <img src={shopInfo.images[0]} alt="お店の写真" />
          ) : (
            <div className="shop-list-item__main-image__no-image">
              <span>no image</span>
            </div>
          )}
        </div>
        {!subImages.every((image) => image === undefined) && (
          <div className="shop-list-item__sub-image-wrapper">
            {subImages.map((image) =>
              image ? (
                <div className="shop-list-item__sub-image" key={image}>
                  <img src={image} alt="お店の写真" />
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
      <div className="shop-list-item__info-wrapper">
        <div className="shop-list-item__info__shop-name">{shopInfo.name}</div>
        <div className="shop-list-item__info__item">Google の評価: {shopInfo.rating || '-'}</div>
        <div className="shop-list-item__info__item">
          電話: {shopInfo.phoneNumber ? <a href={`tel:${shopInfo.phoneNumber}`}>{shopInfo.phoneNumber}</a> : '-'}
        </div>
        <div className="shop-list-item__info__item">
          Webサイト:{' '}
          {shopInfo.website ? (
            <a href={shopInfo.website} target="_blank" rel="noopener noreferrer">
              {shopInfo.website}
            </a>
          ) : (
            '-'
          )}
        </div>
        <div className="shop-list-item__info__item">
          営業時間: {isOpen ? '営業中' : '営業時間外'}
          {shopInfo.weekdayText && (
            <button type="button" onClick={handleToggleOpeningHours}>
              {isOpeningHoursShow ? '▲' : '▼'}
            </button>
          )}
        </div>
        {shopInfo.weekdayText && isOpeningHoursShow && (
          <ul className="shop-list-item__info__item__opening-hours">
            {shopInfo.weekdayText.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
        <div className="shop-list-item__info__item">住所: {shopInfo.address || '-'}</div>
      </div>
    </div>
  );
};

export default ShopListItem;
