import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ img, name, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-content">
        <div className="p-back">
          <a href={link} target="_blank" rel="noreferrer">
            <img className="p-back-img" src={img} alt="application visuals" />
            <p className="p-text">{name}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
