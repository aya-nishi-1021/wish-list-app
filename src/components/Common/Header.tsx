import { useNavigate } from 'react-router-dom';
import '@/assets/styles/components/Common/Header.scss';
import IconSearch from '@/assets/images/icon_search.svg';
import IconArrow from '@/assets/images/icon_arrow.svg';
import IconPerson from '@/assets/images/icon_person.svg';

type Props = {
  isSearchBoxShow: boolean;
  isAddShopButtonShow: boolean;
  headingText?: string;
};

const Header: React.FC<Props> = ({ isSearchBoxShow = true, isAddShopButtonShow = true, headingText }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header__title">
        <a href="/">Food Wish List</a>
      </h1>
      <div className="header__center-part">
        {isSearchBoxShow && (
          <>
            <input type="text" className="header__search-input" />
            <button type="button" className="header__search-button">
              <img src={IconSearch} alt="検索" />
            </button>
          </>
        )}
        {!isSearchBoxShow && (
          <div className="header__heading">
            <button type="button" className="header__heading__back-page-button" onClick={() => navigate(-1)}>
              <img src={IconArrow} alt="前ページに戻る" />
            </button>
            <h2 className="header__heading__text">{headingText}</h2>
          </div>
        )}
      </div>
      <div className="header__right-part">
        {isAddShopButtonShow && (
          <button type="button" className="header__add-shop-button">
            + 行きたいお店を追加
          </button>
        )}
        <a href="/mypage" className="header__to-mypage-link">
          <img src={IconPerson} alt="マイページ" />
        </a>
      </div>
    </header>
  );
};

export default Header;
