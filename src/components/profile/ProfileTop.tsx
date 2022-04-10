import Linkify from "react-linkify";
import { Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/ModeEdit";
import ShareIcon from "@mui/icons-material/ShareRounded";
import LogoutIcon from "@mui/icons-material/LogoutRounded";
import "../../styles/components/profile/ProfileTop.css";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import ShareIntent from "../../components/post/ShareIntent";
import { useState } from "react";

function ProfileTop() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();
  const [openShare, setOpenShare] = useState<boolean>(false);

  return (
    <div
      className="profile__top"
      style={{
        background: user?.coverImage
          ? `url(${user?.coverImage})`
          : "linear-gradient(lightgrey, transparent)",
      }}
    >
      <ShareIntent
        image={`http://localhost:3000/profile/${user?.id}`}
        isShareIntentOpen={openShare}
        setShareIntentOpen={setOpenShare}
      />
      <div className="profile__top__main">
        <Avatar
          className="profile__top__avatar"
          alt={user?.name}
          src={user?.profileImage}
        />
        <div className="profile__top__buttons">
          <IconButton className="profile__top__button">
            <EditIcon className="profile__top__button__icon" />
          </IconButton>
          <IconButton
            className="profile__top__button"
            onClick={() => setOpenShare(true)}
          >
            <ShareIcon className="profile__top__button__icon" />
          </IconButton>
          <IconButton
            className="profile__top__button"
            onClick={() => {
              auth.signOut();
              navigate("/register");
            }}
          >
            <LogoutIcon
              className="profile__top__button__icon"
              style={{ color: "red" }}
            />
          </IconButton>
        </div>
        <p className="profile__top__name">{user?.name}</p>
        <p className="profile__top__username">{user?.username}</p>
        <p className="profile__top__bio">
          <Linkify>{user?.bio}</Linkify>
        </p>
      </div>
    </div>
  );
}

export default ProfileTop;
