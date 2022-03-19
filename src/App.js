import Intro from "./Intro/Intro";
import About from "./about/About";
import ProjectList from "./projects/projectList/ProjectList";
import Contact from "./contact/Contact";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
