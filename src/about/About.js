import React from "react";
import "./About.css";
import developer from "../images/developer.jpg";
import photographer from "../images/photographer1.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={developer} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
          simplemente texto aleatorio.
        </p>
        <p className="a-desc">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
        <div className="a-banner">
          <img src={photographer} alt="" className="a-banner-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
