import React from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./ProjectList.css";
import { apps } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Destiniy depends on Efforts</h1>
        <p className="pl-desc">
          This collection is a creative portfolio that everyone can be inspired.
          Different technologies, styling shortcuts & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {apps.map((item) => (
          <ProjectCard
            key={item.id}
            img={item.img}
            name={item.name}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
