import axios from "axios";

export const addPostToDatabase = async (
  imageURL: string,
  caption: string,
  by: string
) => {
  const data = new FormData();
  data.append("imageURL", imageURL);
  data.append("caption", caption);
  data.append("by", by);
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/add-post`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
