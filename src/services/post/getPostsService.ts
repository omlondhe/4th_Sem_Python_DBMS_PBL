import axios from "axios";

export const getPosts = async (skip: number) => {
  const result = await axios.get("http://127.0.0.1:5100/get-posts", {
    method: "GET",
    params: {
      skip: skip,
    },
  });
  const data = result.data;
  return data;
};

export const getPostsLength = async () => {
  const result = await axios.get(
    "http://127.0.0.1:5100/get-current-post-count",
    {
      method: "GET",
    }
  );
  const data = result.data;
  return data.count;
};
