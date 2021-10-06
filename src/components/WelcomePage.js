import ProfilePicture from "../ProfilePicture.png";
import TypeIt from "typeit-react";
import "../styles/WelcomePage.css";

function Welcome({reference, click}) {
  return (
    <section className="sectionWelcome">
      <div className="welcomeText">
        <h2>¡Bienvenido! Yo soy</h2>
        <h1>
          <TypeIt
            element="h1"
            options={{ loop: true, speed: 100, cursorChar: "|" }}
            getBeforeInit={(instance) => {
              instance
                .type("Stefano Ferrari")
                .pause(1150)
                .delete(15, { speed: 300 })
                .pause(500)
                .type("Desarrollador Frontend JR")
                .pause(1050)
                .delete(21, { speed: 300 });
              return instance;
            }}
          />
        </h1>
        <p>
          Me encuentro finalizando la Tecnicatura Universitaria en Programación
          en la UTN-FRT. El café y la música es mi compañia a la hora de
          programar.
        </p>
        <button ref={reference} onClick={click} className="btn">Mis trabajos</button>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/stefanoferrari0/"
        >
          <button className="btn">LinkedIn</button>
        </a>
      </div>
      <div className="imgContainer">
        <img
          className="welcomeImg"
          src={ProfilePicture}
          alt="Stefano Ferrari"
        />
      </div>
    </section>
  );
}

export default Welcome;
