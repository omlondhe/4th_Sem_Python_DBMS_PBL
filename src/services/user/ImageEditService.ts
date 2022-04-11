import axios from "axios";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../firebase";

export const removeProfileImage = async (uid: string, url: string) => {
  const data = new FormData();
  data.append("uid", uid);
  await deleteObject(await ref(storage, url));
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/remove-profile-image`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const removeCoverImage = async (uid: string, url: string) => {
  const data = new FormData();
  data.append("uid", uid);
  await deleteObject(await ref(storage, url));
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/remove-cover-image`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateProfileImage = async (uid: string, url: string) => {
  const data = new FormData();
  data.append("uid", uid);
  data.append("profileImage", url);
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/update-profile-image`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateCoverImage = async (uid: string, url: string) => {
  const data = new FormData();
  data.append("uid", uid);
  data.append("coverImage", url);
  await axios({
    method: "POST",
    url: `http://127.0.0.1:5100/update-cover-image`,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
