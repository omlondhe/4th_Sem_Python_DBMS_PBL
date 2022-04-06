import { useState } from "react";
import SearchInput from "../components/search/SearchInput";
import SearchProfileListItem from "../components/search/SearchProfileListItem";
import "../styles/pages/Search.css";

function Search() {
  const [isFocused, setFocused] = useState<boolean>(false);

  return (
    <div className="search">
      <SearchInput isFocused={isFocused} setFocused={setFocused} />
      <div className="search__list">
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
        <SearchProfileListItem
          name="Dummy name"
          username="dummyname"
          profileImage=""
        />
      </div>
    </div>
  );
}

export default Search;
