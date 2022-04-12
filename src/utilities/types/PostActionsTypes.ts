import { ObjectFit } from "./CSSTypes";

export interface PostActionsTypes {
  id: string;
  objectFit: ObjectFit;
  setObjectFit: Function;
  setShareIntentOpen: Function;
  image: string;
  likes: string[];
}
