import "../styles/components/Navbar.css";
import HomeFilledIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsFilledIcon from "@mui/icons-material/NotificationsRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ProfileIcon from "@mui/icons-material/PersonRounded";
import ProfileOutlineIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddPostIcon from "@mui/icons-material/AddBoxOutlined";
import { Link, useLocation } from "react-router-dom";
import { BootstrapTooltip } from "../utilities/commons/BootstrapTooltip";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar__nav">
      <div className="navbar__logo">
        <img src="/logo.jpeg" alt="logo" />
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
        {/* <BootstrapTooltip title="Notifications">
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
        </BootstrapTooltip> */}
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
        <BootstrapTooltip title="Add new post">
          <Link
            to={"/add-post"}
            className={
              location.pathname === "/add-post"
                ? "navbar__active__link navbar__link"
                : "navbar__link"
            }
          >
            <AddPostIcon
              className={
                location.pathname === "/add-post"
                  ? "navbar__active__icon"
                  : "navbar__icon"
              }
            />
          </Link>
        </BootstrapTooltip>
      </div>
      <div className="navbar__mobile">
        <Link to={"/search"} className={"navbar__search"}>
          <SearchOutlinedIcon
            className={
              location.pathname === "/search"
                ? "navbar__search__icon__active"
                : "navbar__search__icon"
            }
          />
        </Link>
        <Link to={"/add-post"} className={"navbar__add__post"}>
          <AddPostIcon
            className={
              location.pathname === "/add-post"
                ? "navbar__add__post__icon__active"
                : "navbar__add__post__icon"
            }
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
