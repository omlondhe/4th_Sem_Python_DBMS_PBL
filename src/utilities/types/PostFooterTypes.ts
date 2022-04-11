import { ObjectFit } from "./CSSTypes";

export interface PostFooterTypes {
  image: string;
  caption: string;
  username: string;
  objectFit: ObjectFit;
  setObjectFit: Function;
  setShareIntentOpen: Function;
}
