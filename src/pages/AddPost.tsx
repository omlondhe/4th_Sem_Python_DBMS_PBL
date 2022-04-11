import "../styles/pages/AddPost.css";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
} from "@mui/material";
import { useStateValue } from "../context/StateProvider";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import LikeOutlineIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import ContainIcon from "@mui/icons-material/FullscreenExitOutlined";
import DownloadIcon from "@mui/icons-material/DownloadingOutlined";
import CoverIcon from "@mui/icons-material/FullscreenOutlined";
import RemoveIcon from "@mui/icons-material/ClearRounded";
import SlideSnackbar from "../components/commons/SlideSnackbar";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../services/firebase";
import { addPostToDatabase } from "../services/post/addPostService";

function AddPost() {
  const [{ user }, dispatch] = useStateValue();
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<FileList | null>(null);
  const [objectFit, setObjectFit] = useState<"contain" | "cover">("cover");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("error");
  const [loading, setLoading] = useState<boolean>(false);

  const changeObjectFit = () =>
    objectFit === "contain" ? setObjectFit("cover") : setObjectFit("contain");

  const addPost = async () => {
    setLoading(true);
    if (!image && !caption) {
      setMessage("You must type a message or upload an image.");
      setSeverity("error");
      setShowSnackbar(true);
    } else {
      let imageURL: string = "";
      if (image) {
        const imageRef = ref(
          storage,
          `postImages/${user?.uid}/${Date.now()}_${image[0].name}`
        );
        try {
          await uploadBytes(imageRef, image[0]);
          imageURL = await getDownloadURL(imageRef);
        } catch (e) {
          console.log(e);
        }
      }
      await addPostToDatabase(imageURL, caption, user?.uid);
      setMessage("Post added successfully!");
      setSeverity("success");
      setShowSnackbar(true);
    }
    setLoading(false);
  };

  return (
    <div className="add__post__main">
      <SlideSnackbar
        message={message}
        setShowSnackbar={setShowSnackbar}
        severity={severity}
        showSnackbar={showSnackbar}
      />
      <div className="add__post">
        <div className="add__post__header">
          <Avatar alt={user?.username} src={user?.profileImage} />
          <div className="add__post__header__names">
            <p className="add__post__header__name">{user?.name}</p>
            <p className="add__post__header__username">{user?.username}</p>
          </div>
          <IconButton>
            <MoreIcon />
          </IconButton>
        </div>
        {image ? (
          <div className="add__post__image">
            <IconButton
              className="add__post__remove__icon"
              onClick={() => setImage(null)}
            >
              <RemoveIcon style={{ color: "red", fontSize: 14 }} />
            </IconButton>
            <img
              src={URL.createObjectURL(image[0])}
              alt=""
              style={{ objectFit: objectFit }}
            />
          </div>
        ) : (
          <>
            <p
              className="add__post__image__button"
              onClick={() => document.getElementById("imagePicker")?.click()}
              style={{ marginLeft: image ? 11 : 55 }}
            >
              Click to add image
            </p>
            <input
              type="file"
              id="imagePicker"
              accept="images/"
              hidden
              onChange={(e) => setImage(e.target.files)}
            />
          </>
        )}
        <div className="add__post__footer">
          <p
            className="add__post__caption"
            style={{ marginLeft: image ? 0 : 55 }}
          >
            {image && caption.trim() ? (
              <span className="add__post__author">{user?.username}</span>
            ) : (
              <></>
            )}
            &nbsp;
            <TextareaAutosize
              className="add__post__caption__textarea"
              placeholder="Type caption here..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </p>
          <div className="add__post__actions">
            <IconButton>
              <LikeOutlineIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton>
              <DownloadIcon />
            </IconButton>
            <IconButton onClick={changeObjectFit}>
              {objectFit === "contain" ? <CoverIcon /> : <ContainIcon />}
            </IconButton>
          </div>
        </div>
      </div>
      {loading ? (
        <CircularProgress
          style={{ width: 24, height: 24, color: "grey", marginTop: 7 }}
        />
      ) : (
        <button className="add__post__button" onClick={addPost}>
          Add this post!
        </button>
      )}
    </div>
  );
}

export default AddPost;
