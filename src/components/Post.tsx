import "../styles/components/Post.css";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

function Post() {
  const [image, setImage] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => setImage(data["message"]));
  }, []);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar alt="Om Londhe" src="/static/images/avatar/1.jpg" />
        <div className="post__header__names">
          <p className="post__header__name">Om Londhe</p>
          <p className="post__header__username">omlondhe</p>
        </div>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__footer">
        <p className="post__caption">
          <span className="post__author">Om Londhe</span> &nbsp;&nbsp; Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis
          deleniti et pariatur vero, sit voluptate quasi eligendi facilis. Ut
          esse iste labore ratione magnam aspernatur! Nobis amet numquam tempore
          exercitationem aliquid possimus obcaecati.
        </p>
      </div>
    </div>
  );
}

export default Post;
