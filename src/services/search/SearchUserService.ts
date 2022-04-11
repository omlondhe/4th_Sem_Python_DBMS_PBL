import axios from "axios";

export const getUsers = async (searchString: string) => {
  const result = await axios.get("http://127.0.0.1:5100/get-users", {
    method: "GET",
    params: {
      searchString: searchString,
    },
  });
  const data = result.data;
  return data;
};
