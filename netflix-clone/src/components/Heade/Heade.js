import React from "react";
import "./Heade.css";
import Netflix from "../../assets/images/NetflixLogo.jpg"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Heade = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img
                  className="netflix-img"
                  src={Netflix}
                  alt="NetflixLogo" width={"100"}
                />
              </li>

              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul className="headerIcons">
              <li>
               <SearchIcon/>
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

export default Heade;
