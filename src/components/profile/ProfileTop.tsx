import Linkify from "react-linkify";
import { Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/ModeEdit";
import ShareIcon from "@mui/icons-material/ShareRounded";
import LogoutIcon from "@mui/icons-material/LogoutRounded";
import "../../styles/components/profile/ProfileTop.css";

function ProfileTop() {
  return (
    <div className="profile__top">
      <div className="profile__top__main">
        <Avatar
          className="profile__top__avatar"
          alt="Dummy name"
          src="https://images.dog.ceo/breeds/samoyed/n02111889_1485.jpg"
        />
        <div className="profile__top__buttons">
          <IconButton className="profile__top__button">
            <EditIcon className="profile__top__button__icon" />
          </IconButton>
          <IconButton className="profile__top__button">
            <ShareIcon className="profile__top__button__icon" />
          </IconButton>
          <IconButton className="profile__top__button">
            <LogoutIcon
              className="profile__top__button__icon"
              style={{ color: "red" }}
            />
          </IconButton>
        </div>
        <p className="profile__top__name">Dummy name</p>
        <p className="profile__top__username">dummyname123</p>
        <p className="profile__top__bio">
          <Linkify>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni
            repellat sint nihil inventore. Quia at adipisci eaque cumque omnis,
            quaerat nihil, nisi error esse culpa, voluptates tempora optio autem
            nulla odit.
          </Linkify>
        </p>
      </div>
    </div>
  );
}

export default ProfileTop;
