import '@/assets/styles/components/Home/InfoWindowContent.scss';
import { useNavigate } from 'react-router-dom';
import { ShopInfo } from '@/firebase';

type Props = {
  shopInfo: ShopInfo;
};

const InfoWindowContent: React.FC<Props> = ({ shopInfo }) => {
  const navigate = useNavigate();

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
      className="info-window-content"
      onClick={handleToShopDetail}
      onKeyDown={(e) => handleKeyDown(e)}
      role="button"
      tabIndex={0}
    >
      <div className="info-window-content__shop-name">{shopInfo.name}</div>
      <div className="info-window-content__shop-rating">Google の評価: {shopInfo.rating || '-'}</div>
      <div className="info-window-content__to-shop-detail">詳細を見る</div>
    </div>
  );
};

export default InfoWindowContent;
