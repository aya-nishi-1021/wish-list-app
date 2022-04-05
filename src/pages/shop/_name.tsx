import { useLocation } from 'react-router-dom';
import { ShopInfo } from '@/firebase';

const ShopDetail: React.FC = () => {
  const location = useLocation();
  const { shopInfo } = location.state as { shopInfo: ShopInfo };
  console.log(shopInfo);

  return <div className="shop-detail">詳細</div>;
};

export default ShopDetail;
