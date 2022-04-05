import "../../styles/components/post/PostHeader.css";
import Avatar from "@mui/material/Avatar";
import { PostHeaderTypes } from "../../utilities/types/PostHeaderTypes";

function PostHeader({ profileImage, name, username }: PostHeaderTypes) {
  return (
    <div className="post__header">
      <Avatar alt={username} src={profileImage} />
      <div className="post__header__names">
        <p className="post__header__name">{name}</p>
        <p className="post__header__username">{username}</p>
      </div>
    </div>
  );
}

export default PostHeader;
