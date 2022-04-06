import { Avatar } from "@mui/material";
import "../../styles/components/search/SearchProfileListItem.css";
import { SearchProfileListItemTypes } from "../../utilities/types/SearchProfileListItemTypes";

function SearchProfileListItem({
  name,
  username,
  profileImage,
}: SearchProfileListItemTypes) {
  return (
    <div className="search__profile__list__item">
      <Avatar
        alt={username}
        src={profileImage}
        sx={{ width: 35, height: 35 }}
      />
      <div className="search__profile__list__item__names">
        <p className="search__profile__list__item__name">{name}</p>
        <p className="search__profile__list__item__username">{username}</p>
      </div>
    </div>
  );
}

export default SearchProfileListItem;
