import { PostFooterTypes } from "../../utilities/types/PostFooterTypes";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
import "../../styles/components/post/PostFooter.css";

function PostFooter({
  image,
  caption,
  objectFit,
  setObjectFit,
  setShareIntentOpen,
}: PostFooterTypes) {
  return (
    <div className="post__footer">
      {caption ? (
        <PostCaption username={"dummyname123"} caption={caption} />
      ) : (
        <></>
      )}
      <PostActions
        image={image}
        objectFit={objectFit}
        setObjectFit={setObjectFit}
        setShareIntentOpen={setShareIntentOpen}
      />
    </div>
  );
}

export default PostFooter;
