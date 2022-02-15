import '@/assets/styles/components/Common/BottomNavi.scss';
import IconHome from '@/assets/images/icon_home.svg';
import IconHomeFocused from '@/assets/images/icon_home_pink.svg';
import IconPerson from '@/assets/images/icon_person.svg';
import IconPersonFocused from '@/assets/images/icon_person_pink.svg';

const BottomNavi: React.FC = () => {
  const { pathname } = window.location;
  const displayIconHome = pathname === '/' ? IconHomeFocused : IconHome;
  const displayIconPerson = pathname === '/mypage' ? IconPersonFocused : IconPerson;

  return (
    <div className="bottom-navi">
      <a href="/" className="bottom-navi__link">
        <img src={displayIconHome} alt="ホーム" />
      </a>
      <button type="button" className="bottom-navi__add-shop-button">
        ＋
      </button>
      <a href="/mypage" className="bottom-navi__link">
        <img src={displayIconPerson} alt="マイページ" />
      </a>
    </div>
  );
};

export default BottomNavi;
