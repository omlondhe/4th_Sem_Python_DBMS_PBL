import { PostFooterTypes } from "../../utilities/types/PostFooterTypes";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
import "../../styles/components/post/PostFooter.css";

function PostFooter({
  id,
  image,
  likes,
  caption,
  username,
  objectFit,
  setObjectFit,
  setShareIntentOpen,
}: PostFooterTypes) {
  return (
    <div className="post__footer">
      {caption ? (
        <PostCaption username={username} caption={caption} image={image} />
      ) : (
        <></>
      )}
      <PostActions
        id={id}
        image={image}
        likes={likes}
        objectFit={objectFit}
        setObjectFit={setObjectFit}
        setShareIntentOpen={setShareIntentOpen}
      />
    </div>
  );
}

export default PostFooter;
