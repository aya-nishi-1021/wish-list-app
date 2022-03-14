import '@/assets/styles/components/Common/SearchBox.scss';
import IconSearch from '@/assets/images/icon_search.svg';

const SearchBox: React.FC = () => (
  <div className="search-box">
    <input type="text" className="search-box__input" />
    <button type="button" className="search-box__button">
      <img src={IconSearch} alt="検索" />
    </button>
  </div>
);

export default SearchBox;
