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

export const getProfilePosts = async (skip: number, uid: string) => {
  const result = await axios.get("http://127.0.0.1:5100/get-profile-posts", {
    method: "GET",
    params: {
      skip: skip,
      uid: uid,
    },
  });
  const data = result.data;
  return data;
};

export const deletePost = async (id: string) => {
  const data = new FormData();
  data.append("id", id);
  await axios({
    method: "POST",
    data: data,
    url: "http://127.0.0.1:5100/delete-post",
    headers: { "Content-Type": "multipart/form-data" },
  });
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
