import "../../styles/components/search/SearchInput.css";
import { SearchInputTypes } from "../../utilities/types/SearchInputTypes";

function SearchInput({
  searchString,
  setSearchString,
  isFocused,
  setFocused,
}: SearchInputTypes) {
  return (
    <div className="search__input__box">
      <label
        className={
          isFocused
            ? "search__input__label search__input__label__focused"
            : "search__input__label"
        }
        htmlFor="search__input"
      >
        {searchString ? "" : "Search by name or username"}
      </label>
      <input
        id="search__input"
        className="search__input"
        type={"text"}
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default SearchInput;
