import "../styles/components/Post.css";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import LikeOutlineIcon from "@mui/icons-material/ThumbUpAltOutlined";
import LikeFilledIcon from "@mui/icons-material/ThumbUpAltRounded";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import CoverIcon from "@mui/icons-material/FullscreenOutlined";
import ContainIcon from "@mui/icons-material/FullscreenExitOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from "@mui/icons-material/DownloadingOutlined";
import { IconButton } from "@material-ui/core";

type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";

function Post() {
  const [objectFit, setObjectFit] = useState<ObjectFit>("cover");
  const [image, setImage] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => setImage(data["message"]));
  }, []);

  const changeObjectFit = () =>
    objectFit === "contain" ? setObjectFit("cover") : setObjectFit("contain");

  return (
    <div className="post">
      <div className="post__header">
        <Avatar alt="Om Londhe" src="/static/images/avatar/1.jpg" />
        <div className="post__header__names">
          <p className="post__header__name">Om Londhe</p>
          <p className="post__header__username">omlondhe</p>
        </div>
      </div>
      <div className="post__image">
        <img src={image} alt="" style={{ objectFit: objectFit }} />
      </div>
      <div className="post__footer">
        <p className="post__caption">
          <span className="post__author">Om Londhe</span> &nbsp; Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui perferendis deleniti
          et pariatur vero, sit voluptate quasi eligendi facilis. Ut esse iste
          labore ratione magnam aspernatur! Nobis amet numquam tempore
          exercitationem aliquid possimus obcaecati.
        </p>
        <div className="post__actions">
          <IconButton>
            <LikeOutlineIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <WhatsAppIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
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
  );
}

export default Post;
