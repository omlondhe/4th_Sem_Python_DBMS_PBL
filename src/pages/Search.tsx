import { useEffect, useState } from "react";
import SearchInput from "../components/search/SearchInput";
import SearchProfileListItem from "../components/search/SearchProfileListItem";
import { getUsers } from "../services/search/SearchUserService";
import "../styles/pages/Search.css";
import { SearchUserTypes } from "../utilities/types/SearchUserTypes";

function Search() {
  const [isFocused, setFocused] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>("");
  const [users, setUsers] = useState<SearchUserTypes[]>([]);

  const fetchUsers = async () => {
    setUsers(await getUsers(searchString));
  };

  useEffect(() => {
    if (searchString) {
      fetchUsers();
    }
  }, [searchString]);

  return (
    <div className="search">
      <SearchInput
        isFocused={isFocused}
        setFocused={setFocused}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <div className="search__list">
        {users?.map((_user) => (
          <SearchProfileListItem
            key={_user?.uid}
            name={_user?.name}
            username={_user?.username}
            profileImage={_user?.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
