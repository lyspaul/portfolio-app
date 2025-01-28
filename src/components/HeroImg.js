import "./HeroImg.css";
import React from "react";
import MainImg from "../images/image1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="masking">
        <img className="main-img" src={MainImg} alt="MainImg" />
      </div>
      <div className="content">
        <p>HI, I AM A FREELANCER</p>
        <h1>Full Stack Software Engineer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
