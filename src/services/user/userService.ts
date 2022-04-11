import axios from "axios";

export const getUserData = async (uid: string) => {
  const result = await axios.get("http://127.0.0.1:5100/get-user-data", {
    method: "GET",
    params: {
      uid: uid,
    },
  });
  const data = result.data;
  return data;
};

export const saveEditedNameUsernameAndBio = async (
  uid: string,
  name: string,
  username: string,
  bio: string
) => {
  const data = new FormData();
  data.append("uid", uid);
  data.append("name", name);
  data.append("username", username);
  data.append("bio", bio);
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/update`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
