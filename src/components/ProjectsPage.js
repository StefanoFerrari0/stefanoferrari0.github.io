import "../styles/ProjectsPage.css";
import AndProducciones from "../AndProducciones.gif";
import ReyDelPanchuque from "../ReyDelPanchuque.gif";
import Card from "./Card.js";

function Projects({reference}) {
  return (
    <section ref={reference}className="projectSection">
      <h2 className="title">Portfolio</h2>
      <Card
        alt="El rey del panchuque Website"
        image={ReyDelPanchuque}
        title="El rey del panchuque"
        parragraph="Proyecto realizado con Nextjs, base de datos MongoDB, también creé una API Rest para consumir los datos. Están hechas las bases del proyecto para agrandarlo a un Ecommerce, el backend fue desarrolado con Nodejs.
        Puro CSS. La página consta de una landing page y un cátalogo de productos por los cuales pueden consultar a través de Whatsapp."
        linkCode="https://github.com/StefanoFerrari0/Elreydelpanchuque"
        linkProject="https://elreydelpanchuque-plum.vercel.app/"
      />
      <Card
        alt="And Producciones Website"
        image={AndProducciones}
        title="AndProducciones"
        parragraph="Éste proyecto lo realicé con React, también utilicé Firebase como base
          de datos. Contiene una sección Admin con login y autentificación, en
          la cual hay un CRUD de Eventos, de Artistas y la página se actualizará
          sola en base a estos cambios. Con respecto al diseño, retraté lo
          moderno de la música electrónica, haciendo hincapié en lo que
          representa el subgenero techno, que es el género que trae ésta
          productora de música."
        linkCode="https://github.com/StefanoFerrari0/andproducciones"
        linkProject="https://stefanoferrari0.github.io/andproducciones/"
      />
    </section>
  );
}

export default Projects;
