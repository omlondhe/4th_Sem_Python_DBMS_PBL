import { useState } from "react";
import { sendEmailSignInLink } from "../services/firebaseAuth";
import "../styles/pages/Register.css";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const register = async (e: any) => {
    e.preventDefault();
    const result = await sendEmailSignInLink(name!, email!, username!);
    if (result.message === "Success") {
      window.localStorage.setItem("emailForSignIn", email!);
    } else {
    }
  };

  return (
    <div className="register">
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
        <button className="register__button">Register</button>
      </form>
    </div>
  );
}

export default Register;
