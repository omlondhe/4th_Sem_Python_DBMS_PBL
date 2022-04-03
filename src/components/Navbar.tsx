import "../styles/components/Navbar.css";
import HomeFilledIcon from "@mui/icons-material/HomeRounded";
import FavoriteFilledIcon from "@mui/icons-material/FavoriteRounded";
import ProfileIcon from "@mui/icons-material/PersonRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar__nav">
      <div className="navbar__logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
      </div>
      <div className="navbar__links">
        <Link
          to={"/"}
          className={
            location.pathname === "/"
              ? "navbar__active__link navbar__link"
              : "navbar__link"
          }
        >
          <HomeFilledIcon
            className={
              location.pathname === "/"
                ? "navbar__active__icon"
                : "navbar__icon"
            }
          />
        </Link>
        <Link
          to={"/favorites"}
          className={
            location.pathname === "/favorites"
              ? "navbar__active__link navbar__link"
              : "navbar__link"
          }
        >
          <FavoriteFilledIcon
            className={
              location.pathname === "/favorites"
                ? "navbar__active__icon"
                : "navbar__icon"
            }
          />
        </Link>
        <Link
          to={"/profile"}
          className={
            location.pathname === "/profile"
              ? "navbar__active__link navbar__link"
              : "navbar__link"
          }
        >
          <ProfileIcon
            className={
              location.pathname === "/profile"
                ? "navbar__active__icon"
                : "navbar__icon"
            }
          />
        </Link>
        <Link
          to={"/search"}
          className={
            location.pathname === "/search"
              ? "navbar__active__link navbar__link"
              : "navbar__link"
          }
        >
          <SearchOutlinedIcon
            className={
              location.pathname === "/search"
                ? "navbar__active__icon"
                : "navbar__icon"
            }
          />
        </Link>
      </div>
      <Link to={"/search"} className="navbar__search">
        <SearchOutlinedIcon className="navbar__search__icon" />
      </Link>
    </nav>
  );
}

export default Navbar;
