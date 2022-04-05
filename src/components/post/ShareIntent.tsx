import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import "../../styles/components/post/ShareIntent.css";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactElement, Ref } from "react";
import { ShareIntentTypes } from "../../utilities/types/ShareIntentTypes";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ShareIntent({
  isShareIntentOpen,
  setShareIntentOpen,
  image,
}: ShareIntentTypes) {
  return (
    <Dialog
      open={isShareIntentOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setShareIntentOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Share"}</DialogTitle>
      <DialogContent>
        <div className="share__intent__share__icon__grid">
          <WhatsappShareButton url={image}>
            <WhatsappIcon size={51} />
          </WhatsappShareButton>
          <TwitterShareButton url={image}>
            <TwitterIcon size={51} />
          </TwitterShareButton>
          <FacebookShareButton url={image}>
            <FacebookIcon size={51} />
          </FacebookShareButton>
          <EmailShareButton url={image}>
            <EmailIcon size={51} />
          </EmailShareButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShareIntentOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ShareIntent;
