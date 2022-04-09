import { auth } from "../services/firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth/registerService";
import { CircularProgress } from "@mui/material";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function Verify() {
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email: string | null = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation.");
      }
      signInWithEmailLink(auth, email!, window.location.href)
        .then((_) => {
          console.log("...");
          if (!query.get("login")) {
            const name = query.get("name");
            const username = query.get("username");
            registerUser(name!, username!, email!).then(() => {
              // navigate("/");
            });
          }
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((_) => {});
    }
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        placeItems: "center",
      }}
    >
      <CircularProgress
        style={{ width: 30, height: 30, color: "grey", marginBottom: 21 }}
      />
      <p>Verifying...</p>
    </div>
  );
}

export default Verify;
