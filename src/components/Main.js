import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

const Main = () => {
  return (
    <div className="scroll-smooth select-none">
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
