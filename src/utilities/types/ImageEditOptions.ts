import { ReactElement } from "react";

export interface ImageEditOptionsTypes {
  forType: "profile" | "cover";
  open: boolean;
  setOpen: Function;
  setMessage: Function;
  setSeverity: Function;
  setShowSnackbar: Function;
}

export interface ImageEditOptionListTypes {
  icon: ReactElement;
  text: String;
}
