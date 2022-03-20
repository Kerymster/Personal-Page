import React from "react";
import "./intro.css";
import pp from "../images/profilephoto.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello Everyone,</h2>
          <div className="i-i">
            <small className="i-ismall">I'm</small>
          </div>
          <div className="i-name">Kerim YILMAZ</div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Electronics Engineer</div>
              <div className="i-title-item">English Instructor</div>
              <div className="i-title-item">Energy Manager</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <div className="i-desc">
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <div className="i-bg2">
            {" "}
            <img src={pp} alt="" className="i-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
