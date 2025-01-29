import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import topPic from "../images/profile2.png";
import bottomPic from "../images/profile1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a software Engineer passionate about crafting clean, efficient,
          and user-centric solutions. With expertise in full-stack development,
          I thrive on turning ideas into reality through code.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={bottomPic} className="img" alt="bottom image" />
          </div>
          <div className="img-stack bottom">
            <img src={topPic} className="img" alt="top image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
