import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Verify from "./pages/Verify";
import { useEffect } from "react";
import { auth } from "./services/firebase";
import { getUserData } from "./services/user/userService";
import { useStateValue } from "./context/StateProvider";
import { actionTypes } from "./context/reducer";

function App() {
  const location = useLocation();
  const navigation = useNavigate();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (
        user &&
        (location.pathname === "/login" ||
          location.pathname === "/register" ||
          location.pathname === "/verify")
      ) {
        navigation("/");
      } else if (
        !user &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/verify"
      ) {
        navigation("/register");
      } else if (user) {
        getUserData(auth.currentUser?.uid!)
          .then((data) =>
            dispatch({
              type: actionTypes.SET_USER,
              user: data,
            })
          )
          .catch((error) => console.log(error));
      }
    });
  }, []);

  return (
    <div className="app">
      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/verify" ? (
        <></>
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/verify" ? (
        <></>
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
