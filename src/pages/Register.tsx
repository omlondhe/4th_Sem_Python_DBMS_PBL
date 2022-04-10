import { useState } from "react";
import { sendEmailSignInLink } from "../services/firebaseAuth";
import "../styles/pages/Register.css";
import {
  checkIfEmailExist,
  checkIfUsernameExist,
} from "../services/auth/registerService";
import SlideSnackbar from "../components/auth/SlideSnackbar";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("error");
  const [loading, setLoading] = useState<boolean>(false);

  const register = async (e: any) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      if (name.length < 2) {
        setShowSnackbar(true);
        setSeverity("error");
        setMessage("Name must be at least 2 letters long.");
      } else if (await checkIfUsernameExist(username)) {
        setShowSnackbar(true);
        setSeverity("error");
        setMessage("Username already exist.");
      } else if (await checkIfEmailExist(email)) {
        setShowSnackbar(true);
        setSeverity("error");
        setMessage("Email already exist, try logging in.");
      } else {
        const result = await sendEmailSignInLink(name!, email!, username!);
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
      }
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <SlideSnackbar
        message={message}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        severity={severity}
      />
      <form className="register__form" onSubmit={register}>
        <p className="register__title">Register</p>
        <input
          className="register__input"
          placeholder="Enter your name"
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="register__input"
          placeholder="Enter your username"
          type="text"
          name="username"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register__input"
          placeholder="Enter your email"
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
          <div>
            <button className="register__button">Register</button>
            <Link
              to={"/login"}
              className="register__button"
              style={{
                marginTop: 7,
                textDecoration: "none",
                color: "black",
                marginLeft: 4,
              }}
            >
              Login instead
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;
