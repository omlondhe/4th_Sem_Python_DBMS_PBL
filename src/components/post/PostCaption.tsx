import "../../styles/components/post/PostCaption.css";
import { PostCaptionTypes } from "../../utilities/types/PostCaptionTypes";

function PostCaption({ username, caption }: PostCaptionTypes) {
  return (
    <p className="post__caption">
      <span className="post__author">{username}</span> &nbsp; {caption}
    </p>
  );
}

export default PostCaption;
