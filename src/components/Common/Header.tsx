import '@/assets/styles/components/Common/Header.scss';
import IconSearch from '@/assets/images/icon_search.svg';
import IconPerson from '@/assets/images/icon_person.svg';

const Header: React.FC = () => (
  <header className="header">
    <h1 className="header__title">
      <a href="/">Food Wish List</a>
    </h1>
    <div className="header__center-part">
      <input type="text" className="header__search-input" />
      <button type="button" className="header__search-button">
        <img src={IconSearch} alt="検索する" />
      </button>
    </div>
    <div className="header__right-part">
      <button type="button" className="header__add-shop-button">
        + 行きたいお店を追加
      </button>
      <a href="/mypage" className="header__to-mypage-link">
        <img src={IconPerson} alt="マイページ" />
      </a>
    </div>
  </header>
);

export default Header;
