import { useState } from "react";
import { sendEmailLogInLink } from "../services/firebaseAuth";
import "../styles/pages/LogIn.css";

function LogIn() {
  const [email, setEmail] = useState<string>("");

  const login = async (e: any) => {
    e.preventDefault();
    const result = await sendEmailLogInLink(email!);
    if (result.message === "Success") {
      window.localStorage.setItem("emailForSignIn", email!);
    } else {
    }
  };

  return (
    <div className="login">
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
        <button className="login__button">Log in</button>
      </form>
    </div>
  );
}

export default LogIn;
