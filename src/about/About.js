import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <p className="a-sub">
          I have experience in identifying the requirements of the client,
          planning, designing, implementing, and testing front-end web
          applications by bringing together the vision, strategy, and execution
          in a totally unstructured and resource-constrained environment.
          <br /> I graduated with a degree in electronics engineering from the
          Air Force Academy. Before making the switch to the development
          environment, I worked for several years as an officer. That helped me
          to become a multitask-handler in stressful and resource-constrained
          environments.
        </p>
        <p className="a-desc">
          I worked in the field of photography, videography, and web development
          called Fanus Media.
          <br /> As a front-end developer, I worked on ERP projects at Fanus
          Media. I've developed extensive knowledge in
          <br /> Programming languages: Javascript/Typescript <br /> Libraries:
          React, Redux. <br /> Styling: CSS, SCSS. <br /> Methodologies:
          Pair-Programming, Test-driven development. <br /> Git&Github,
          Firebase, Bootstrap, Material UI, JIRA <br /> Graphic Programs:
          Photoshop, Premiere Pro, Lightroom I am open to new job opportunities.
        </p>
        <div className="a-banner">
          <img
            src="https://images.unsplash.com/photo-1580892047528-7dfd384dce65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt=""
            className="a-banner-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
