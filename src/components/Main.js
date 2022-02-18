import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="scroll-smooth select-none">
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Main;
