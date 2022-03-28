import { useNavigate } from 'react-router-dom';
import '@/assets/styles/components/Common/Header.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';
import IconPerson from '@/assets/images/icon_person.svg';
import SearchBox from '@/components/Common/SearchBox';

type Props = {
  isSearchBoxShow: boolean;
  isAddShopButtonShow: boolean;
  headingText?: string;
  handleClickAddShopButton?: VoidFunction;
};

const Header: React.FC<Props> = ({
  isSearchBoxShow = true,
  isAddShopButtonShow = true,
  headingText,
  handleClickAddShopButton,
}) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header__title">
        <a href="/">Food Wish List</a>
      </h1>
      <div className="header__center-part">
        {isSearchBoxShow && <SearchBox handleClickSearchButton={() => console.log('Header の検索ボタンをクリック')} />}
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
          <button type="button" className="header__add-shop-button" onClick={handleClickAddShopButton}>
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
