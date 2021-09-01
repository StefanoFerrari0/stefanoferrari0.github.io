import React, { useState } from "react";
import Icons from "./icons";
import copy from "copy-to-clipboard";
import "../styles/AboutMePage.css";

function AboutMePage() {
  const [copyText, setCopyText] = useState("stefanoferrari.dev@gmail.com");

  const copyToClipboard = () => {
    copy(copyText);
    alert(`You have copied "${copyText}"`);
  };

  return (
    <section className="section">
      <h2 className="title">Sobre mí</h2>
      <h3 className="subtitle">Desarrollador Frontend Jr</h3>
      <p>
        Vivo en Tucumán - Argentina, actualmente estoy finalizando la
        Tecnicatura Universitaria en Programación, años anteriores estudié
        Diseño Gráfico en UNSTA, lo cual me ayuda a diseñar el Front-End en una
        página. Soy una persona abierta a las criticas, amante del conocimiento
        y siempre con una sonrisa.
      </p>

      <Icons></Icons>

      <div className="refContainer">
        <div className="item">
          <span className="circle"></span>
          <span className="nameCircle">Conocimientos en: </span>
        </div>
        <div className="item">
          <span className="circle circleChangeColor"></span>
          <span className="nameCircle">Incursionando en: </span>
        </div>
      </div>
      <div className="containerBtn">
        <a
          href="https://drive.google.com/file/d/1dQbzWpxmPYqwl6GOBRq-eRaTJDtETiF2/view"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Descargar CV</button>
        </a>

        <button onClick={copyToClipboard} className="btn">
          Copiar Mail
        </button>
      </div>
    </section>
  );
}

export default AboutMePage;
