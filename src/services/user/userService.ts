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
