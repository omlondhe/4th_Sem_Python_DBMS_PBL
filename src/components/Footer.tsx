import "../styles/components/Footer.css";
import { Link, useLocation } from "react-router-dom";
import HomeFilledIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ProfileIcon from "@mui/icons-material/PersonRounded";
import ProfileOutlineIcon from "@mui/icons-material/PersonOutlineRounded";
import NotificationsFilledIcon from "@mui/icons-material/NotificationsRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsNoneRounded";

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
        {location.pathname === "/" ? (
          <HomeFilledIcon className={"navbar__active__icon"} />
        ) : (
          <HomeOutlinedIcon className={"navbar__icon"} />
        )}
      </Link>
      <Link
        to={"/notifications"}
        className={
          location.pathname === "/notifications"
            ? "footer__active__link footer__link"
            : "footer__link"
        }
      >
        {location.pathname === "/notifications" ? (
          <NotificationsFilledIcon className={"navbar__active__icon"} />
        ) : (
          <NotificationsOutlinedIcon className={"navbar__icon"} />
        )}
      </Link>
      <Link
        to={"/profile"}
        className={
          location.pathname === "/profile"
            ? "footer__active__link footer__link"
            : "footer__link"
        }
      >
        {location.pathname === "/profile" ? (
          <ProfileIcon className={"navbar__active__icon"} />
        ) : (
          <ProfileOutlineIcon className={"navbar__icon"} />
        )}
      </Link>
    </footer>
  );
}

export default Footer;
