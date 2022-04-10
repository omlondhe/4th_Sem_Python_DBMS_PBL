import "../styles/components/Post.css";
import { useEffect, useState } from "react";
import ShareIntent from "./post/ShareIntent";
import PostHeader from "./post/PostHeader";
import PostFooter from "./post/PostFooter";
import { ObjectFit } from "../utilities/types/CSSTypes";
import { PostType } from "../utilities/types/PostType";

function Post({ imageURL, caption, at, by, likes }: PostType) {
  const [objectFit, setObjectFit] = useState<ObjectFit>("cover");
  const [isShareIntentOpen, setShareIntentOpen] = useState<boolean>(false);

  return (
    <div className="post">
      <ShareIntent
        isShareIntentOpen={isShareIntentOpen}
        setShareIntentOpen={setShareIntentOpen}
        image={imageURL!}
      />
      <PostHeader profileImage="" name="Dummy name" username="dummyname123" />
      {imageURL ? (
        <div className="post__image">
          <img src={imageURL} alt="" style={{ objectFit: objectFit }} />
        </div>
      ) : (
        <></>
      )}
      <PostFooter
        caption={caption}
        image={imageURL!}
        objectFit={objectFit}
        setObjectFit={setObjectFit}
        setShareIntentOpen={setShareIntentOpen}
      />
    </div>
  );
}

export default Post;
