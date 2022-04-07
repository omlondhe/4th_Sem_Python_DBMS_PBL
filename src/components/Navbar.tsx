import "../styles/components/Navbar.css";
import HomeFilledIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsFilledIcon from "@mui/icons-material/NotificationsRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ProfileIcon from "@mui/icons-material/PersonRounded";
import ProfileOutlineIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useLocation } from "react-router-dom";
import { BootstrapTooltip } from "../utilities/commons/BootstrapTooltip";

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
        <BootstrapTooltip title="Home">
          <Link
            to={"/"}
            className={
              location.pathname === "/"
                ? "navbar__active__link navbar__link"
                : "navbar__link"
            }
          >
            {location.pathname === "/" ? (
              <HomeFilledIcon className={"navbar__active__icon"} />
            ) : (
              <HomeOutlinedIcon className={"navbar__icon"} />
            )}
          </Link>
        </BootstrapTooltip>
        <BootstrapTooltip title="Notifications">
          <Link
            to={"/notifications"}
            className={
              location.pathname === "/notifications"
                ? "navbar__active__link navbar__link"
                : "navbar__link"
            }
          >
            {location.pathname === "/notifications" ? (
              <NotificationsFilledIcon className={"navbar__active__icon"} />
            ) : (
              <NotificationsOutlinedIcon className={"navbar__icon"} />
            )}
          </Link>
        </BootstrapTooltip>
        <BootstrapTooltip title="Profile">
          <Link
            to={"/profile"}
            className={
              location.pathname === "/profile"
                ? "navbar__active__link navbar__link"
                : "navbar__link"
            }
          >
            {location.pathname === "/profile" ? (
              <ProfileIcon className={"navbar__active__icon"} />
            ) : (
              <ProfileOutlineIcon className={"navbar__icon"} />
            )}
          </Link>
        </BootstrapTooltip>
        <BootstrapTooltip title="Search">
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
        </BootstrapTooltip>
      </div>
      <Link to={"/search"} className="navbar__search">
        <SearchOutlinedIcon className="navbar__search__icon" />
      </Link>
    </nav>
  );
}

export default Navbar;
