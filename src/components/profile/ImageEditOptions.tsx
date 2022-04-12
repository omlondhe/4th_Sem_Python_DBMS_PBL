import {
  Backdrop,
  Box,
  CircularProgress,
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseRounded";
import RemoveIcon from "@mui/icons-material/RemoveRounded";
import ImageOptionsIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import {
  ImageEditOptionListTypes,
  ImageEditOptionsTypes,
} from "../../utilities/types/ImageEditOptions";
import { useStateValue } from "../../context/StateProvider";
import {
  removeCoverImage,
  removeProfileImage,
  updateCoverImage,
  updateProfileImage,
} from "../../services/user/ImageEditService";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/firebase";
import { actionTypes } from "../../context/reducer";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 250,
  bgcolor: "background.paper",
  border: "1px solid grey",
  borderRadius: 7,
  boxShadow: 24,
  p: 2,
};

const listItemsData: ImageEditOptionListTypes[] = [
  {
    icon: <ImageOptionsIcon />,
    text: "Upload new image",
  },
  {
    icon: <RemoveIcon />,
    text: "Remove current image",
  },
  {
    icon: <CloseIcon />,
    text: "Cancel",
  },
];

function ImageEditOptions({
  forType,
  open,
  setOpen,
  setMessage,
  setSeverity,
  setShowSnackbar,
}: ImageEditOptionsTypes) {
  const [{ user }, dispatch] = useStateValue();
  const [image, setImage] = useState<FileList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const performAction = async (type: String) => {
    if (type === listItemsData[2].text) setOpen(false);
    else if (type === listItemsData[1].text) {
      setLoading(true);
      if (forType === "cover" && user?.coverImage !== "") {
        await removeCoverImage(user?.uid, user?.coverImage);
        setMessage("Cover image removed!");
        setSeverity("success");
        setShowSnackbar(true);
        updateUserState(user?.profileImage, "");
      } else if (forType === "profile" && user?.profileImage !== "") {
        await removeProfileImage(user?.uid, user?.profileImage);
        setMessage("Profile image removed!");
        setSeverity("success");
        setShowSnackbar(true);
        updateUserState("", user?.coverImage);
      }
      setLoading(false);
      setOpen(false);
    } else if (type === listItemsData[0].text) {
      document.getElementById("editImagePicker")?.click();
    }
  };

  const uploadImage = async () => {
    if (image) {
      const imageRef = ref(
        storage,
        `${forType}/${user?.uid}/${Date.now()}_${image[0].name}`
      );
      try {
        await uploadBytes(imageRef, image[0]);
        const imageURL = await getDownloadURL(imageRef);
        if (forType === "profile") {
          await updateProfileImage(user?.uid, imageURL);
          setMessage("Profile image updated!");
          updateUserState(imageURL, user?.coverImage);
        } else if (forType === "cover") {
          await updateCoverImage(user?.uid, imageURL);
          setMessage("Cover image updated!");
          updateUserState(user?.profileImage, imageURL);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const updateUserState = (profileImage: string, coverImage: string) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: {
        ...user,
        profileImage: profileImage,
        coverImage: coverImage,
      },
    });
  };

  useEffect(() => {
    if (image) {
      setLoading(true);
      uploadImage().then(() => {
        if (image) {
          setLoading(false);
          setOpen(false);
          setSeverity("success");
          setShowSnackbar(true);
        }
      });
    }
  }, [image]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <input
            type="file"
            accept="images/"
            hidden
            id="editImagePicker"
            onChange={(e) => setImage(e.target.files)}
          />
          {loading ? (
            <CircularProgress
              style={{ width: 24, height: 24, color: "grey", marginTop: 7 }}
            />
          ) : (
            <List>
              {listItemsData.map((listItemData: ImageEditOptionListTypes) => (
                <ListItem disablePadding key={`${listItemData.text}`}>
                  <ListItemButton
                    onClick={() => performAction(listItemData.text)}
                  >
                    <ListItemIcon>{listItemData.icon}</ListItemIcon>
                    <ListItemText primary={listItemData.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}

export default ImageEditOptions;
