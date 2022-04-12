import "../styles/pages/Home.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { PostType } from "../utilities/types/PostType";
import { getPosts, getPostsLength } from "../services/post/getPostsService";
import { CircularProgress } from "@mui/material";

function Home() {
  const [skips, setSkips] = useState<number>(0);
  const [totalDataLength, setTotalDataLength] = useState<number>(0);
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchData = async () => {
    setPosts(await getPosts(skips));
    setSkips(10);
  };

  useEffect(() => {
    getPostsLength().then(async (length) => {
      setTotalDataLength(length);
      await fetchData();
    });
  }, []);

  return (
    <div className="home">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchData}
        hasMore={skips < totalDataLength}
        loader={
          <CircularProgress
            style={{ width: 24, height: 24, color: "grey", marginTop: 7 }}
          />
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.map((post) => (
          <Post
            key={`${post.id}-${post.at}-${Date.now()}`}
            id={post.id}
            at={post.at}
            by={post.by}
            caption={post.caption}
            imageURL={post.imageURL}
            likes={post.likes}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Home;
