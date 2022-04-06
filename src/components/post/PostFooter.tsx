import { PostFooterTypes } from "../../utilities/types/PostFooterTypes";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
import "../../styles/components/post/PostFooter.css";

function PostFooter({
  image,
  objectFit,
  setObjectFit,
  setShareIntentOpen,
}: PostFooterTypes) {
  return (
    <div className="post__footer">
      <PostCaption
        username={"dummyname123"}
        caption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut perspiciatis dolores est distinctio aliquam cum esse assumenda nostrum soluta sint ad consequuntur praesentium atque, https://github.com/tasti/react-linkify/ provident, enim deserunt officia ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut perspiciatis dolores est distinctio aliquam cum esse assumenda nostrum soluta sint ad consequuntur praesentium atque, provident, enim deserunt officia ut?"
        }
      />
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
