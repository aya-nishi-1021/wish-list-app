import '@/assets/styles/components/Common/SearchBox.scss';
import IconSearch from '@/assets/images/icon_search.svg';

type Props = {
  value: string;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: VoidFunction;
};

const SearchBox: React.FC<Props> = ({ value, handleChangeValue, handleSearch }) => {
  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-box__input"
        value={value}
        onChange={(e) => handleChangeValue(e)}
        onKeyPress={(e) => handlePressEnter(e)}
      />
      <button type="button" className="search-box__button" onClick={handleSearch}>
        <img src={IconSearch} alt="検索" />
      </button>
    </div>
  );
};

export default SearchBox;
