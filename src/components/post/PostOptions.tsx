import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import GotoIcon from "@mui/icons-material/CallMadeRounded";
import CopyLinkIcon from "@mui/icons-material/CopyAllRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import {
  PostOptionListTypes,
  PostOptionsTypes,
} from "../../utilities/types/PostOptionsTypes";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

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
    icon: <GotoIcon />,
    text: "Go to post",
  },
  {
    icon: <CopyLinkIcon />,
    text: "Copy link",
  },
  {
    icon: <CloseIcon />,
    text: "Cancel",
  },
];

function PostOptions({ open, setOpen }: PostOptionsTypes) {
  const performAction = (type: String) => {
    if (type === "Cancel") setOpen(false);
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
          <List>
            {listItemsData.map((listItemData: PostOptionListTypes) => (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => performAction(listItemData.text)}
                >
                  <ListItemIcon>{listItemData.icon}</ListItemIcon>
                  <ListItemText primary={listItemData.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Fade>
    </Modal>
  );
}

export default PostOptions;
