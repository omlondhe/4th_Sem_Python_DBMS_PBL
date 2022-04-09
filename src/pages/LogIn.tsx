import { useState } from "react";
import { checkIfEmailExist } from "../services/auth/registerService";
import { sendEmailLogInLink } from "../services/firebaseAuth";
import "../styles/pages/LogIn.css";
import SlideSnackbar from "../components/auth/SlideSnackbar";
import { CircularProgress } from "@mui/material";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("error");
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (await checkIfEmailExist(email)) {
      const result = await sendEmailLogInLink(email!);
      if (result.message === "Success") {
        setShowSnackbar(true);
        setSeverity("success");
        setMessage("Check your email for verification link.");
        window.localStorage.setItem("emailForSignIn", email!);
      } else {
        setShowSnackbar(true);
        setSeverity("error");
        setMessage("Error while sending email verification link.");
      }
    } else {
      setShowSnackbar(true);
      setSeverity("error");
      setMessage("Email does not exist, kindly register!");
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <SlideSnackbar
        message={message}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        severity={severity}
      />
      <form className="login__form" onSubmit={login}>
        <p className="login__title">Log in</p>
        <input
          className="login__email"
          placeholder="Enter your registered email"
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {loading ? (
          <CircularProgress
            style={{ width: 24, height: 24, color: "grey", marginTop: 7 }}
          />
        ) : (
          <button className="login__button">Log in</button>
        )}
      </form>
    </div>
  );
}

export default LogIn;
