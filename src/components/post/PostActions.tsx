import LikeOutlineIcon from "@mui/icons-material/ThumbUpAltOutlined";
import LikeFilledIcon from "@mui/icons-material/ThumbUpAltRounded";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import CoverIcon from "@mui/icons-material/FullscreenOutlined";
import ContainIcon from "@mui/icons-material/FullscreenExitOutlined";
import DownloadIcon from "@mui/icons-material/DownloadingOutlined";
import { IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import "../../styles/components/post/PostActions.css";
import { PostActionsTypes } from "../../utilities/types/PostActionsTypes";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { useStateValue } from "../../context/StateProvider";
import { disLikePost, likePost } from "../../services/post/likePostService";

function PostActions({
  id,
  image,
  likes,
  objectFit,
  setObjectFit,
  setShareIntentOpen,
}: PostActionsTypes) {
  const [{ user }, dispatch] = useStateValue();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const changeObjectFit = () =>
    objectFit === "contain" ? setObjectFit("cover") : setObjectFit("contain");

  const changeLikeState = async () => {
    if (isLiked) await disLikePost(id, user?.uid);
    else await likePost(id, user?.uid);
    setIsLiked(!isLiked);
  };

  // function toDataURL(url: string) {
  //   return fetch(url)
  //     .then((response) => {
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       return URL.createObjectURL(blob);
  //     });
  // }

  async function download(url: string) {
    // const a = document.createElement("a");
    // a.style.display = "none";
    // a.href = await toDataURL(url);
    // a.download = `image-${Date.now()}.png`;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);

    document.getElementById(`image-${image}`)?.click();
  }

  useEffect(() => {
    likes.includes(`${user?.uid}`) ? setIsLiked(true) : setIsLiked(false);
  }, []);

  return (
    <div className="post__actions">
      <a href={image} download id={`image-${image}`} hidden></a>
      <IconButton onClick={changeLikeState}>
        {isLiked ? <LikeFilledIcon /> : <LikeOutlineIcon />}
      </IconButton>
      <IconButton onClick={() => setShareIntentOpen(true)}>
        <ShareIcon />
      </IconButton>
      <IconButton onClick={() => download(image)} disabled={!image}>
        <NorthEastRoundedIcon />
      </IconButton>
      <IconButton onClick={changeObjectFit} disabled={!image}>
        {objectFit === "contain" ? <CoverIcon /> : <ContainIcon />}
      </IconButton>
    </div>
  );
}

export default PostActions;
