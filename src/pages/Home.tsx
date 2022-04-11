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
    fetchData();
    getPostsLength().then((length) => setTotalDataLength(length));
  }, []);

  console.log(posts);

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
        // // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
        {posts.map((post) => (
          <Post
            key={`${post.by}-${post.at}-${Date.now()}`}
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
