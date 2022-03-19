import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ img, name, link, desc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-content">
        <div className="p-back">
          <img className="p-back-img" src={img} alt="application visuals" />
          <div className="p-intro">
            <h1 className="p-text">{name}</h1>
            <p>
              <span>{name}</span>
              {desc}
            </p>
            {/* <a href={link} target="_blank" rel="noreferrer">
              <button>More</button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
