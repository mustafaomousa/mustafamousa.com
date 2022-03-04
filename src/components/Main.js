import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "../components/Home/Contact";
import Education from "./Education";
import Experience from "./Experience";

const Main = () => {
  return (
    <div className="scroll-smooth select-none h-screen overflow-scroll w-[min(90%,1100px)] mx-auto py-20">
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

export default Main;
