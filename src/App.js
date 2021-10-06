import React, { useRef } from 'react'
import Welcome from "./components/WelcomePage";
import AboutMe from "./components/AboutMePage";
import Projects from "./components/ProjectsPage";
import "./styles/App.css";

function App() {

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();

  return (
    <div className="container">
      <Welcome  reference={el1} click={()=> scrollToDiv(el2)} />
      <AboutMe />
      <Projects reference={el2} />
    </div>
  );
}

export default App;
