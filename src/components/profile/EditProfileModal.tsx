import "../../styles/components/profile/EditProfileModal.css";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextareaAutosize,
} from "@mui/material";
import { forwardRef, ReactElement, Ref, useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { EditProfileModalTypes } from "../../utilities/types/EditProfileModalTypes";
import { checkIfUsernameExist } from "../../services/auth/registerService";
import { useStateValue } from "../../context/StateProvider";
import { useTheme } from "@mui/material/styles";
import { saveEditedNameUsernameAndBio } from "../../services/user/userService";
import { actionTypes } from "../../context/reducer";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditProfileModal({
  isEditIntentOpen,
  setIsEditIntentOpen,
  setMessage,
  setSeverity,
  setShowSnackbar,
}: EditProfileModalTypes) {
  const [{ user }, dispatch] = useStateValue();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const save = async (e: any) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      if (name.length < 2) {
        setShowSnackbar(true);
        setSeverity("error");
        setMessage("Name must be at least 2 letters long.");
      } else if (username.trim().length < 4) {
        setShowSnackbar(true);
        setSeverity("error");
        setMessage("Username must be at least 4 letters long.");
      } else if (
        user?.username !== username &&
        (await checkIfUsernameExist(username))
      ) {
        setShowSnackbar(true);
        setSeverity("error");
        setMessage("Username already exist.");
      } else {
        await saveEditedNameUsernameAndBio(user?.uid, name, username, bio);
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            ...user,
            name: name,
            username: username,
            bio: bio,
          },
        });
        setIsEditIntentOpen(false);
        setShowSnackbar(true);
        setSeverity("success");
        setMessage("Profile updated!");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    setName(user?.name);
    setUsername(user?.username);
    setBio(user?.bio);
  }, [user]);

  return (
    <Dialog
      open={isEditIntentOpen}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      onClose={() => setIsEditIntentOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Edit profile"}</DialogTitle>
      <DialogContent>
        <div className="edit__form">
          <input
            className="edit__input"
            placeholder="Enter new name"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="edit__input"
            placeholder="Enter new username"
            type="text"
            name="username"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
          <TextareaAutosize
            className="edit__input"
            placeholder="Enter your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsEditIntentOpen(false)}>Close</Button>
        {loading ? (
          <CircularProgress
            style={{ width: 24, height: 24, color: "grey", marginTop: 7 }}
          />
        ) : (
          <Button onClick={save}>Save</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default EditProfileModal;
