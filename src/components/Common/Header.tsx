import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopInfo } from '@/firebase';
import '@/assets/styles/components/Common/Header.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';
import IconPerson from '@/assets/images/icon_person.svg';
import SearchBox from '@/components/Common/SearchBox';

type Props = {
  isSearchBoxShow: boolean;
  searchText?: string;
  setSearchText?: Dispatch<SetStateAction<string>>;
  setSearchedShopList?: Dispatch<SetStateAction<ShopInfo[]>>;
  setSelectedShop?: Dispatch<SetStateAction<ShopInfo | null>>;
  isAddShopButtonShow: boolean;
  handleAddShop?: VoidFunction;
  headingText?: string;
};

const Header: React.FC<Props> = ({
  isSearchBoxShow = true,
  searchText,
  setSearchText,
  setSearchedShopList,
  setSelectedShop,
  isAddShopButtonShow = true,
  handleAddShop,
  headingText,
}) => {
  const navigate = useNavigate();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchText) setSearchText(e.target.value);
  };

  const searchShop = () => {
    if (!searchText && setSearchedShopList) {
      setSearchedShopList([]);
      return;
    }
    if (setSelectedShop) setSelectedShop(null);
    const dummySearchedShopList: ShopInfo[] = [
      {
        placeId: 'placeId',
        images: [],
        name: 'name',
        rating: undefined,
        phoneNumber: 'phoneNumber',
        website: 'website',
        weekdayText: [],
        address: 'address',
        position: {
          lat: 0,
          lng: 0,
        },
      },
    ];
    if (setSearchedShopList) setSearchedShopList(dummySearchedShopList);
  };

  return (
    <header className="header">
      <h1 className="header__title">
        <a href="/">Food Wish List</a>
      </h1>
      <div className="header__center-part">
        {isSearchBoxShow && (
          <SearchBox
            value={searchText || ''}
            handleChangeValue={(e) => handleChangeValue(e)}
            handleSearch={() => searchShop()}
          />
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
          <button type="button" className="header__add-shop-button" onClick={handleAddShop}>
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
