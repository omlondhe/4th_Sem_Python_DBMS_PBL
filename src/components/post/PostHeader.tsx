import "../../styles/components/post/PostHeader.css";
import Avatar from "@mui/material/Avatar";
import { PostHeaderTypes } from "../../utilities/types/PostHeaderTypes";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import PostOptions from "./PostOptions";
import { useState } from "react";

function PostHeader({ profileImage, name, username }: PostHeaderTypes) {
  const [open, setOpen] = useState(false);

  return (
    <div className="post__header">
      <Avatar alt={username} src={profileImage} />
      <div className="post__header__names">
        <p className="post__header__name">{name}</p>
        <p className="post__header__username">{username}</p>
      </div>
      <PostOptions open={open} setOpen={setOpen} />
      <IconButton onClick={() => setOpen(true)}>
        <MoreIcon />
      </IconButton>
    </div>
  );
}

export default PostHeader;
