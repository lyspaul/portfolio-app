import React from "react";
import "./ProjectCard.css";
import studentApp from "../images/studentApp.png";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-buttons">
          <NavLink to={props.view} className="btn">
            VIEW
          </NavLink>
          <NavLink to={props.source} className="btn">
            SOURCE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
