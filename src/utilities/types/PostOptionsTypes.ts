import { ReactElement } from "react";

export interface PostOptionsTypes {
  id: string;
  postImage: string;
  open: boolean;
  setOpen: Function;
}

export interface PostOptionListTypes {
  icon: ReactElement;
  text: String;
}
