import '@/assets/styles/components/Home/ShopListView/ShopListItem.scss';
import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopInfo } from '@/firebase';
import GoneButton from '@/components/Common/GoneButton';

type Props = {
  shopInfo: ShopInfo;
};

const ShopListItem: React.FC<Props> = ({ shopInfo }) => {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState<string | null>(null);
  const [subImages, setSubImages] = useState<(string | null)[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const { google } = window;
  const service = useMemo(
    () => new google.maps.places.PlacesService(document.createElement('div')),
    [google.maps.places.PlacesService]
  );
  useEffect(() => {
    if (!shopInfo.placeId) return;
    service.getDetails({ placeId: shopInfo.placeId }, (r, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if (!r) return;
        if (!r.opening_hours) return;
        setMainImage(r.photos && r.photos[0] ? r.photos[0].getUrl() : null);
        setSubImages([
          r.photos && r.photos[1] ? r.photos[1].getUrl() : null,
          r.photos && r.photos[2] ? r.photos[2].getUrl() : null,
          r.photos && r.photos[3] ? r.photos[3].getUrl() : null,
        ]);
        setIsOpen(r.opening_hours.isOpen() || false);
      }
    });
  }, [google.maps.places.PlacesServiceStatus.OK, service, shopInfo.placeId]);

  const handleToShopDetail = () => {
    if (!shopInfo.name) return;
    navigate(`/shop/${shopInfo.name}`, {
      state: {
        shopInfo,
        isOpen,
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
          {mainImage ? (
            <img src={mainImage} alt="お店の写真" />
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
        <div className="shop-list-item__info__shop-name-wrapper">
          <div className="shop-list-item__info__shop-name">{shopInfo.name}</div>
          <GoneButton isGone />
        </div>
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
        <div className="shop-list-item__info__item">営業時間: {isOpen ? '営業中' : '営業時間外'}</div>
        <div className="shop-list-item__info__item">住所: {shopInfo.address || '-'}</div>
      </div>
    </div>
  );
};

export default ShopListItem;
