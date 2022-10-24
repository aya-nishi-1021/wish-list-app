import '@/assets/styles/components/Home/HomeHeader.scss';
import { Dispatch, SetStateAction } from 'react';
import { Button, styled } from '@material-ui/core';
import { fetchWishListByName, ShopInfo } from '@/firebase';
import IconPerson from '@/assets/images/icon_person.svg';
import SearchBox from '@/components/Common/SearchBox';

type Props = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchedShopList: Dispatch<SetStateAction<ShopInfo[] | null>>;
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

  const searchShop = async () => {
    if (!searchText) {
      setSearchedShopList(null);
      return;
    }
    setSelectedShop(null);
    const data = await fetchWishListByName(searchText);
    setSearchedShopList(data as ShopInfo[]);
  };

  const AddShopButton = styled(Button)({
    padding: '8px 12px',
    borderRadius: 8,
    backgroundColor: '#ff8ba7',
    fontSize: '1.4rem',
    whiteSpace: 'nowrap',
  });

  return (
    <header className="home-header">
      <h1 className="home-header__title">
        <a href="/">Wish List</a>
      </h1>
      <div className="home-header__center-part">
        <SearchBox
          value={searchText}
          handleChangeValue={(e) => handleChangeValue(e)}
          handleSearch={() => searchShop()}
        />
      </div>
      <div className="home-header__right-part">
        <AddShopButton onClick={handleAddShop}>+ 行きたいお店を追加</AddShopButton>
        <a href="/mypage" className="home-header__to-mypage-link">
          <img src={IconPerson} alt="マイページ" />
        </a>
      </div>
    </header>
  );
};

export default HomeHeader;
