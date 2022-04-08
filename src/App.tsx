import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Verify from "./pages/Verify";

function App() {
  const location = useLocation();

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
