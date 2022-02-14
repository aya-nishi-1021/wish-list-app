import '@/assets/styles/components/MyPage/ToHomeLink.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';

const ToHomeLink: React.FC = () => (
  <a href="/" className="to-home-link">
    <img src={IconArrow} alt="to home" />
    ホームに戻る
  </a>
);

export default ToHomeLink;
