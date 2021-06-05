import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
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
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";

const NavDrawer = styled(Drawer)`
  background-color: #1c0732;
`;

function App() {
  return (
    <div className="App">
      <NavDrawer variant="permanent">
        <div>example</div>
      </NavDrawer>
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
