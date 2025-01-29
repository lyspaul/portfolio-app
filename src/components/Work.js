import React from "react";
import "./ProjectCard.css";
import ProjectCard from "./ProjectCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="projects-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <ProjectCard
              key={index}
              imgSrc={val.imgSrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
