import '@/assets/styles/components/MyPage/MyPageHeader.scss';
import { useNavigate } from 'react-router-dom';
import IconArrow from '@/assets/images/icon_arrow.svg';
import IconPerson from '@/assets/images/icon_person.svg';

const MyPageHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="my-page-header">
      <h1 className="my-page-header__title">
        <a href="/">Wish List</a>
      </h1>
      <div className="my-page-header__center-part">
        <div className="my-page-header__heading">
          <button type="button" className="my-page-header__heading__back-page-button" onClick={() => navigate(-1)}>
            <img src={IconArrow} alt="前ページに戻る" />
          </button>
          <h2 className="my-page-header__heading__text">マイページ</h2>
        </div>
      </div>
      <div className="my-page-header__right-part">
        <a href="/mypage" className="my-page-header__to-mypage-link">
          <img src={IconPerson} alt="マイページ" />
        </a>
      </div>
    </header>
  );
};

export default MyPageHeader;
