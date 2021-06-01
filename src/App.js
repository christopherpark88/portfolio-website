import logo from "./logo.svg";
import "./App.css";
import HeaderCard from "./sections/Title";
import SkillsSection from "./sections/Skills";
import WorkSection from "./sections/Work";
import ProjectsSection from "./sections/Projects";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Sky from "react-sky";
import javascriptlogo from "./logos/javascriptlogo.png";
import pythonlogo from "./logos/pythonlogo.png";
import reactlogo from "./logos/reactlogo.png";
import nodelogo from "./logos/nodelogo.png";
import typescriptlogo from "./logos/typescriptlogo.png";

function App() {
  return (
    <div className="App">
      {/* <Sky
        images={{
          0: javascriptlogo,
          1: pythonlogo,
          2: reactlogo,
          3: nodelogo,
          4: typescriptlogo,
        }}
        how={150}
        time={40}
        size={"100px"}
        background={"palettedvioletred"}
      /> */}
      <header className="App-header">
        <HeaderCard />
      </header>
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
