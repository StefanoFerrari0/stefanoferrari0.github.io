import "./styles/App.css";
import Welcome from "./components/WelcomePage";
import AboutMe from "./components/AboutMePage";
import Projects from "./components/ProjectsPage";

function App() {
  return (
    <div className="container">
      <Welcome />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
