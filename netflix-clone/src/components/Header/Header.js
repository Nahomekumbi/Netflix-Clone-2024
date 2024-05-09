import React, { useEffect, useState } from "react";
import "./Header.css";
import Netflix from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <>
      <div className={`header_outer_container ${show && "nav_black"}`}>
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img
                  className="netflix-img"
                  src={Netflix}
                  alt="NetflixLogo"
                  width={"100"}
                />
              </li>
              <li>
                <a href="https://www.netflix.com/browse">Home</a>
              </li>
              <li>
                <a href="https://www.netflix.com/browse/genre/83">TVShows</a>
              </li>
              <li>
                {" "}
                <a href="https://www.netflix.com/browse/genre/34399">
                  Movies
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://www.netflix.com/latest">New & Popular</a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://www.netflix.com/browse/my-list">
                  My List
                </a>{" "}
              </li>
              <li>
                <a href="https://www.netflix.com/browse/original-audio">
                  Browse by Languages
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="header_right">
            <ul className="headerIcons">
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>

              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
