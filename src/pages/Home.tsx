import "../styles/pages/Home.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { PostType } from "../utilities/types/PostType";
import { getPosts } from "../services/post/getPostsService";

function Home() {
  const [skips, setSkips] = useState<number>(0);
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchData = async () => {
    setPosts(await getPosts(skips));
    setSkips(10);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);

  return (
    <div className="home">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
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
