import Linkify from "react-linkify";
import ShowMoreText from "react-show-more-text";
import "../../styles/components/post/PostCaption.css";
import { PostCaptionTypes } from "../../utilities/types/PostCaptionTypes";

function PostCaption({ username, caption }: PostCaptionTypes) {
  return (
    <p className="post__caption">
      <span className="post__author">{username}</span> &nbsp;
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
    </p>
  );
}

export default PostCaption;
