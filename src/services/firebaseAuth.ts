import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "./firebase";

interface SendEmailLinkReturnType {
  message: string;
}

export const sendEmailSignInLink = async (
  name: string,
  email: string,
  username: string
): Promise<SendEmailLinkReturnType> => {
  const actionCodeSettings = {
    url: `http://localhost:3000/verify?name=${name}&username=${username}&email=${email}`,
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    return { message: "Success" };
  } catch (error) {
    console.log(error);
    return { message: "Failure" };
  }
};

export const sendEmailLogInLink = async (
  email: string
): Promise<SendEmailLinkReturnType> => {
  const actionCodeSettings = {
    url: `http://localhost:3000/verify?login=true&email=${email}`,
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    return { message: "Success" };
  } catch (error) {
    console.log(error);
    return { message: "Failure" };
  }
};
