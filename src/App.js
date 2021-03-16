import logo from "./logo.svg";
import "./App.css";
import HeaderCard from "./sections/Title";
import SkillsSection from "./sections/Skills";
import WorkSection from "./sections/Work";
import ProjectsSection from "./sections/Projects";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <HeaderCard />
      </header>
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
