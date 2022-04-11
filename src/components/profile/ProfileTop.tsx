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
import EditProfileModal from "./EditProfileModal";
import SlideSnackbar from "../commons/SlideSnackbar";
import ImageOptionsIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ImageEditOptions from "./ImageEditOptions";

function ProfileTop() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();
  const [openShare, setOpenShare] = useState<boolean>(false);
  const [forType, setForType] = useState<"profile" | "cover">("cover");
  const [openImageOptions, setOpenImageOptions] = useState<boolean>(false);
  const [isEditIntentOpen, setIsEditIntentOpen] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("error");

  return (
    <div
      className="profile__top"
      style={{
        background: user?.coverImage
          ? `url(${user?.coverImage})`
          : "linear-gradient(lightgrey, transparent)",
      }}
    >
      <IconButton
        className="profile__top__cover__image__edit"
        onClick={() => {
          setForType("cover");
          setOpenImageOptions(true);
        }}
      >
        <ImageOptionsIcon className="profile__top__image__edit__icon" />
      </IconButton>
      <ImageEditOptions
        forType={forType}
        open={openImageOptions}
        setOpen={setOpenImageOptions}
        setMessage={setMessage}
        setSeverity={setSeverity}
        setShowSnackbar={setShowSnackbar}
      />
      <EditProfileModal
        isEditIntentOpen={isEditIntentOpen}
        setIsEditIntentOpen={setIsEditIntentOpen}
        setMessage={setMessage}
        setSeverity={setSeverity}
        setShowSnackbar={setShowSnackbar}
      />
      <ShareIntent
        image={`http://localhost:3000/profile/${user?.id}`}
        isShareIntentOpen={openShare}
        setShareIntentOpen={setOpenShare}
      />
      <SlideSnackbar
        message={message}
        severity={severity}
        setShowSnackbar={setShowSnackbar}
        showSnackbar={showSnackbar}
      />
      <div className="profile__top__main">
        <Avatar
          className="profile__top__avatar"
          alt={user?.name}
          src={user?.profileImage}
        />
        <IconButton
          className="profile__top__profile__image__edit"
          onClick={() => {
            setForType("profile");
            setOpenImageOptions(true);
          }}
        >
          <ImageOptionsIcon className="profile__top__image__edit__icon" />
        </IconButton>
        <div className="profile__top__buttons">
          <IconButton
            className="profile__top__button"
            onClick={() => setIsEditIntentOpen(true)}
          >
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
