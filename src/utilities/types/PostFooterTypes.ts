import { ObjectFit } from "./CSSTypes";

export interface PostFooterTypes {
  id: string;
  likes: string[];
  image: string;
  caption: string;
  username: string;
  objectFit: ObjectFit;
  setObjectFit: Function;
  setShareIntentOpen: Function;
}
