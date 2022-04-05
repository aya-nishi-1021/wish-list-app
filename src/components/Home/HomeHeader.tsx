import '@/assets/styles/components/Home/HomeHeader.scss';
import { Dispatch, SetStateAction } from 'react';
import { ShopInfo } from '@/firebase';
import IconPerson from '@/assets/images/icon_person.svg';
import SearchBox from '@/components/Common/SearchBox';

type Props = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchedShopList: Dispatch<SetStateAction<ShopInfo[]>>;
  setSelectedShop: Dispatch<SetStateAction<ShopInfo | null>>;
  handleAddShop: VoidFunction;
};

const HomeHeader: React.FC<Props> = ({
  searchText,
  setSearchText,
  setSearchedShopList,
  setSelectedShop,
  handleAddShop,
}) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const searchShop = () => {
    if (!searchText) {
      setSearchedShopList([]);
      return;
    }
    setSelectedShop(null);
    const dummySearchedShopList: ShopInfo[] = [
      {
        placeId: 'placeId-01',
        images: [],
        name: 'JR茨木駅',
        rating: undefined,
        phoneNumber: 'phoneNumber',
        website: 'website',
        weekdayText: [],
        address: 'address',
        position: {
          lat: 34.8151651,
          lng: 135.5620685,
        },
      },
      {
        placeId: 'placeId-02',
        images: [],
        name: '阪急茨木市駅',
        rating: undefined,
        phoneNumber: 'phoneNumber',
        website: 'website',
        weekdayText: [],
        address: 'address',
        position: {
          lat: 34.8166592,
          lng: 135.5758172,
        },
      },
    ];
    setSearchedShopList(dummySearchedShopList);
  };

  return (
    <header className="home-header">
      <h1 className="home-header__title">
        <a href="/">Food Wish List</a>
      </h1>
      <div className="home-header__center-part">
        <SearchBox
          value={searchText}
          handleChangeValue={(e) => handleChangeValue(e)}
          handleSearch={() => searchShop()}
        />
      </div>
      <div className="home-header__right-part">
        <button type="button" className="home-header__add-shop-button" onClick={handleAddShop}>
          + 行きたいお店を追加
        </button>
        <a href="/mypage" className="home-header__to-mypage-link">
          <img src={IconPerson} alt="マイページ" />
        </a>
      </div>
    </header>
  );
};

export default HomeHeader;
