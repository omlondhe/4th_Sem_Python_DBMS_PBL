import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CopyLinkIcon from "@mui/icons-material/CopyAllRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import {
  PostOptionListTypes,
  PostOptionsTypes,
} from "../../utilities/types/PostOptionsTypes";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { deletePost } from "../../services/post/getPostsService";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../services/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const listItemsData: PostOptionListTypes[] = [
  {
    icon: <DeleteIcon />,
    text: "Delete Post",
  },
  {
    icon: <CloseIcon />,
    text: "Cancel",
  },
];

function PostOptions({ id, open, setOpen, postImage }: PostOptionsTypes) {
  const [loading, setLoading] = useState<boolean>(false);

  const performAction = async (type: String) => {
    if (type === listItemsData[1].text) setOpen(false);
    else if (type === listItemsData[0].text) {
      setLoading(true);
      if (postImage) {
        await deleteObject(await ref(storage, postImage));
      }
      await deletePost(id);
      window.location.reload();
      setLoading(false);
      setOpen(false);
    }
  };

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
          {loading ? (
            <CircularProgress
              style={{ width: 24, height: 24, color: "grey", marginTop: 7 }}
            />
          ) : (
            <List>
              {listItemsData.map((listItemData: PostOptionListTypes) => (
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

export default PostOptions;
