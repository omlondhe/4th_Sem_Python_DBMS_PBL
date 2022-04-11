import "../styles/components/Post.css";
import { useEffect, useState } from "react";
import ShareIntent from "./post/ShareIntent";
import PostHeader from "./post/PostHeader";
import PostFooter from "./post/PostFooter";
import { ObjectFit } from "../utilities/types/CSSTypes";
import { PostType } from "../utilities/types/PostType";
import { PostHeaderTypes } from "../utilities/types/PostHeaderTypes";
import { getUserData } from "../services/user/userService";

function Post({ imageURL, caption, at, by, likes }: PostType) {
  const [userData, setUserData] = useState<PostHeaderTypes>({
    name: "",
    profileImage: "",
    username: "",
  });
  const [objectFit, setObjectFit] = useState<ObjectFit>("cover");
  const [isShareIntentOpen, setShareIntentOpen] = useState<boolean>(false);

  const fetchUserData = async () => {
    setUserData(await getUserData(by));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="post">
      <ShareIntent
        isShareIntentOpen={isShareIntentOpen}
        setShareIntentOpen={setShareIntentOpen}
        image={imageURL!}
      />
      <PostHeader
        profileImage={userData?.profileImage!}
        name={userData?.name!}
        username={userData?.username!}
      />
      {imageURL ? (
        <div className="post__image">
          <img src={imageURL} alt="" style={{ objectFit: objectFit }} />
        </div>
      ) : (
        <></>
      )}
      <PostFooter
        username={userData?.username}
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
