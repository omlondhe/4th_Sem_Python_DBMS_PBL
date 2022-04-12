import "../styles/components/Post.css";
import { useEffect, useState } from "react";
import ShareIntent from "./post/ShareIntent";
import PostHeader from "./post/PostHeader";
import PostFooter from "./post/PostFooter";
import { ObjectFit } from "../utilities/types/CSSTypes";
import { PostType } from "../utilities/types/PostType";
import { PostHeaderTypes } from "../utilities/types/PostHeaderTypes";
import { getUserData } from "../services/user/userService";
import { CircularProgress } from "@mui/material";
import moment from "moment";

function Post({ imageURL, caption, at, by, id, likes }: PostType) {
  const [userData, setUserData] = useState<PostHeaderTypes>({
    id: "",
    name: "",
    username: "",
    postImage: "",
    profileImage: "",
  });
  const [objectFit, setObjectFit] = useState<ObjectFit>("cover");
  const [isShareIntentOpen, setShareIntentOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserData = async () => {
    setUserData(await getUserData(by));
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return loading ? (
    <CircularProgress
      style={{ width: 24, height: 24, color: "grey", marginTop: 7 }}
    />
  ) : (
    <div className="post">
      <ShareIntent
        isShareIntentOpen={isShareIntentOpen}
        setShareIntentOpen={setShareIntentOpen}
        image={imageURL!}
      />
      <PostHeader
        id={id}
        postImage={imageURL}
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
        id={id}
        username={userData?.username}
        caption={caption}
        image={imageURL!}
        likes={likes}
        objectFit={objectFit}
        setObjectFit={setObjectFit}
        setShareIntentOpen={setShareIntentOpen}
      />
      <p className="post__timestamp">{moment(at.split(".")[0]).fromNow()}</p>
    </div>
  );
}

export default Post;
