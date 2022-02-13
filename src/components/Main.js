import { Divider } from "@mui/material";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <div>
      <Home />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
    </div>
  );
};

export default Main;
