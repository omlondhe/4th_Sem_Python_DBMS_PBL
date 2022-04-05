import "../styles/components/Post.css";
import { useEffect, useState } from "react";
import ShareIntent from "./post/ShareIntent";
import PostHeader from "./post/PostHeader";
import PostFooter from "./post/PostFooter";
import { ObjectFit } from "../utilities/types/CSSTypes";

function Post() {
  const [image, setImage] = useState();
  const [objectFit, setObjectFit] = useState<ObjectFit>("cover");
  const [isShareIntentOpen, setShareIntentOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => setImage(data["message"]));
  }, []);

  return (
    <div className="post">
      <ShareIntent
        isShareIntentOpen={isShareIntentOpen}
        setShareIntentOpen={setShareIntentOpen}
        image={image!}
      />
      <PostHeader profileImage="" name="Dummy name" username="dummyname123" />
      <div className="post__image">
        <img src={image} alt="" style={{ objectFit: objectFit }} />
      </div>
      <PostFooter
        image={image!}
        objectFit={objectFit}
        setObjectFit={setObjectFit}
        setShareIntentOpen={setShareIntentOpen}
      />
    </div>
  );
}

export default Post;
