import axios from "axios";

export const checkIfEmailExist = async (email: string): Promise<boolean> => {
  const response = await axios.get(`http://127.0.0.1:5100/check-email`, {
    method: "GET",
    params: {
      email: email,
    },
  });
  const result: { exist: boolean } = response.data;

  return result.exist;
};

export const checkIfUsernameExist = async (
  username: string
): Promise<boolean> => {
  const response = await axios.get(`http://127.0.0.1:5100/check-username`, {
    method: "GET",
    params: {
      username: username,
    },
  });
  const result: { exist: boolean } = response.data;

  return result.exist;
};

export const registerUser = async (
  name: string,
  username: string,
  email: string
) => {
  const data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("username", username);
  data.append("bio", "");
  data.append("profileImage", "");
  data.append("coverImage", "");
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/register`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
