import Linkify from "react-linkify";
import ShowMoreText from "react-show-more-text";
import "../../styles/components/post/PostCaption.css";
import { PostCaptionTypes } from "../../utilities/types/PostCaptionTypes";

function PostCaption({ username, caption, image }: PostCaptionTypes) {
  return (
    <div className="post__caption" style={{ marginLeft: image ? 0 : 45 }}>
      {image ? <span className="post__author">{username}</span> : <></>}
      <ShowMoreText
        lines={3}
        more="more"
        less="less"
        className="post__caption__text"
        anchorClass="post__caption__text__anchor"
        expanded={false}
        truncatedEndingComponent={"... "}
      >
        <Linkify>{caption}</Linkify>
      </ShowMoreText>
    </div>
  );
}

export default PostCaption;
