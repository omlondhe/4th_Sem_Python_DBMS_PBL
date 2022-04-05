import "../styles/components/Footer.css";
import { Link, useLocation } from "react-router-dom";
import HomeFilledIcon from "@mui/icons-material/HomeRounded";
import FavoriteFilledIcon from "@mui/icons-material/FavoriteRounded";
import ProfileIcon from "@mui/icons-material/PersonRounded";

function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      <Link
        to={"/"}
        className={
          location.pathname === "/"
            ? "footer__active__link footer__link"
            : "footer__link"
        }
      >
        <HomeFilledIcon
          className={
            location.pathname === "/" ? "footer__active__icon" : "footer__icon"
          }
        />
      </Link>
      <Link
        to={"/favorites"}
        className={
          location.pathname === "/favorites"
            ? "footer__active__link footer__link"
            : "footer__link"
        }
      >
        <FavoriteFilledIcon
          className={
            location.pathname === "/favorites"
              ? "footer__active__icon"
              : "footer__icon"
          }
        />
      </Link>
      <Link
        to={"/profile"}
        className={
          location.pathname === "/profile"
            ? "footer__active__link footer__link"
            : "footer__link"
        }
      >
        <ProfileIcon
          className={
            location.pathname === "/profile"
              ? "footer__active__icon"
              : "footer__icon"
          }
        />
      </Link>
    </footer>
  );
}

export default Footer;
