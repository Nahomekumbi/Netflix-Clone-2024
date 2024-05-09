import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <a className="icon_links" href="https://www.facebook.com/netflix" >
            {" "}
            <FacebookOutlinedIcon />
          </a>
          <a className="icon_links" href="https://www.instagram.com/netflix/" >
            <InstagramIcon />
          </a>
          <a className="icon_links" href="https://twitter.com/netflix">
            {" "}
            <TwitterIcon />{" "}
          </a>
          <a className="icon_links" href="https://www.youtube.com/netflix">
            <YouTubeIcon />
          </a>
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>
                {" "}
                <a href="https://www.netflix.com/browse/audio-description">
                  Audio Description
                </a>
              </li>
              <li>
                <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/notices">
                  Legal Notice
                </a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://help.netflix.com/en/">Help Center</a>
              </li>
              <li>
                <a href="https://jobs.netflix.com/">Jobs</a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/privacy#cookies">
                  Cookie Preference
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://www.netflix.com/redeem">Gift Card</a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/termsofuse">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/en/node/134094">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://media.netflix.com/en/">Media Center</a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/privacy">Privacy</a>
              </li>
              <li>
                <a href="https://help.netflix.com/en/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="service_Code">
          <p>Service code</p>
        </div>
        <div className="copy_right">&copy;1997=2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
