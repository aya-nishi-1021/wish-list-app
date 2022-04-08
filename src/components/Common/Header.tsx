import '@/assets/styles/components/Common/Header.scss';
import { useNavigate } from 'react-router-dom';
import IconArrow from '@/assets/images/icon_arrow.svg';
import IconPerson from '@/assets/images/icon_person.svg';

type Props = {
  headingText: string;
};

const Header: React.FC<Props> = ({ headingText }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header__title">
        <a href="/">Wish List</a>
      </h1>
      <div className="header__center-part">
        <div className="header__heading">
          <button type="button" className="header__heading__back-page-button" onClick={() => navigate(-1)}>
            <img src={IconArrow} alt="前ページに戻る" />
          </button>
          <h2 className="header__heading__text">{headingText}</h2>
        </div>
      </div>
      <div className="header__right-part">
        <a href="/mypage" className="header__to-mypage-link">
          <img src={IconPerson} alt="マイページ" />
        </a>
      </div>
    </header>
  );
};

export default Header;
