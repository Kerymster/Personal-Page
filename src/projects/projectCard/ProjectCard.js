import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle">test</div>
      </div>
      <a href="https://github.com/Kerymster" target="_blank" rel="noreferrer">
        <img src="" alt="project-img" className="p-image" />
      </a>
    </div>
  );
};

export default ProjectCard;
