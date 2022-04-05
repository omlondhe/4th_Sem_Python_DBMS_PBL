import { useState } from "react";
import "../styles/pages/Search.css";

function Search() {
  const [isFocused, setFocused] = useState<boolean>(false);

  return (
    <div className="search">
      <div className="search__input__box">
        <label
          className={
            isFocused
              ? "search__input__label search__input__label__focused"
              : "search__input__label"
          }
          htmlFor="search__input"
        >
          Search by name or username
        </label>
        <input
          id="search__input"
          className="search__input"
          type={"text"}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
}

export default Search;
