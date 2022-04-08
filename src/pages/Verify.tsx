import { auth } from "../services/firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function Verify() {
  const query = useQuery();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email: string | null = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(auth, email!, window.location.href)
        .then((result) => {
          console.log(query.get("login"));
          console.log(query.get("name"));
          console.log(query.get("username"));
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {});
    }
  }, []);

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <p>Verifying...</p>
    </div>
  );
}

export default Verify;
