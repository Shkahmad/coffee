import React from "react";
import "./Herder.css";
import { IoIosTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Herder = () => {
  return (
    <>
      <div className="herdre">
        <div className="herder-info">
          <div className="herder-text">
            <h1>
              <IoIosTime
                style={{
                  margin: "0 2px 0 0",
                  position: "relative",
                  top: "-2px",
                  fontSize: "1rem",
                  color: "#b99272",
                }}
              />
              <span>OPENING HOURS : </span>
              08:00 AM - 09:00 PM
            </h1>
          </div>
          <div className="herder-icons">
            <FaFacebook className="her-soci-ic" />
            <FaTwitter className="her-soci-ic" />
            <IoLogoInstagram className="her-soci-ic" />
            <FaYoutube className="her-soci-ic" />
          </div>
          <div className="herder-location">
            <h1>
              <CiLocationOn
                style={{
                  margin: "0 2px 0 0",
                  position: "relative",
                  top: "-2px",
                  fontSize: "1rem",
                  color: "#b99272",
                }}
              />
              <span>LOCATION :</span>
              55 MAIN STREET, NEW YORK
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herder;
