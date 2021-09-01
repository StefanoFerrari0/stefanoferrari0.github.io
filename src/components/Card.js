import { FaEye, FaCode } from "react-icons/fa";
import "../styles/Card.css";

function Card({ image, alt, title, parragraph, linkCode, linkProject }) {
  return (
    <article className="card">
      <img src={image} alt={alt} className="projectImg" />
      <div className="projectText">
        <h3>{title}</h3>

        <p>{parragraph}</p>

        <div className="allBtn">
          <a target="_blank" rel="noreferrer" href={linkCode}>
            <button className="btn2">
              <FaCode className="svgIcon" size={20} fill="white" />
              Código
            </button>
          </a>

          <a target="_blank" rel="noreferrer" href={linkProject}>
            <button className="btn2">
              <FaEye className="svgIcon" size={20} fill="white" />
              Proyecto
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
