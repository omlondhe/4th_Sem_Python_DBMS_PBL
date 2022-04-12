import axios from "axios";

export const likePost = async (id: string, uid: string) => {
  const data = new FormData();
  data.append("uid", uid);
  data.append("id", id);
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/like-post`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const disLikePost = async (id: string, uid: string) => {
  const data = new FormData();
  data.append("uid", uid);
  data.append("id", id);
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/dislike-post`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
