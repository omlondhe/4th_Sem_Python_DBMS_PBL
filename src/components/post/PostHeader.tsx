import "../../styles/components/post/PostHeader.css";
import Avatar from "@mui/material/Avatar";
import { PostHeaderTypes } from "../../utilities/types/PostHeaderTypes";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import PostOptions from "./PostOptions";
import { useState } from "react";
import { useStateValue } from "../../context/StateProvider";

function PostHeader({
  id,
  profileImage,
  name,
  username,
  postImage,
}: PostHeaderTypes) {
  const [open, setOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="post__header">
      <Avatar alt={username} src={profileImage} />
      <div className="post__header__names">
        <p className="post__header__name">{name}</p>
        <p className="post__header__username">{username}</p>
      </div>
      <PostOptions
        id={id}
        postImage={postImage}
        open={open}
        setOpen={setOpen}
      />
      {username === user?.username ? (
        <IconButton onClick={() => setOpen(true)}>
          <MoreIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PostHeader;
