import rumblrHome from "./rumblr-home.png";
import audifamilyThread from "./audifamily-thread.png";
import encephascapeBrainfolio from "./encephascape-brainfolio.png";
import careBnbHome from "./carebnb-home.png";
import icons from "../../icons";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "Rumblr",
    description:
      "A single page web application inspired by Tumblr that allows users to create and like posts.",
    technologies: [
      { name: "JavaScript", icon: icons.javascript },
      { name: "React", icon: icons.react },
      { name: "NodeJS", icon: icons.nodedotjs },
      { name: "Express", icon: icons.express },
      { name: "PostgreSQL", icon: icons.postgresql },
    ],
    screenshot: rumblrHome,
    github: "https://github.com/mustafaomousa/Rumblr",
    site: "https://rumblr-app.herokuapp.com/",
  },
  {
    name: "audifamily",
    description:
      "A single page web application forum for Audi enthusiasts to create and respond to threads.",
    technologies: [
      { name: "JavaScript", icon: icons.javascript },
      { name: "React", icon: icons.react },
      { name: "Python", icon: icons.python },
      { name: "Flask", icon: icons.flask },
      { name: "SQLAlchemy" },
    ],
    screenshot: audifamilyThread,
    github: "https://github.com/mustafaomousa/audifamily",
    site: "https://audifamily.herokuapp.com/",
  },
  {
    name: "EncephaScape",
    description:
      "A single page web application inspired by BrainScape that allows users to build and study stacks.",
    technologies: [
      { name: "JavaScript", icon: icons.javascript },
      { name: "React", icon: icons.react },
      { name: "NodeJS", icon: icons.nodedotjs },
      { name: "Express", icon: icons.express },
      { name: "PostgreSQL", icon: icons.postgresql },
    ],
    screenshot: encephascapeBrainfolio,
    github: "https://github.com/mustafaomousa/EncephaScape",
    site: "https://encephascape.herokuapp.com/",
  },
  {
    name: "CareBnb",
    description:
      "A single page web application inspired by AirBnb that allows users to book or donate to a spot, built collaboratively.",
    technologies: [
      { name: "JavaScript", icon: icons.javascript },
      { name: "React", icon: icons.react },
      { name: "Python", icon: icons.python },
      { name: "Flask", icon: icons.flask },
      { name: "SQLAlchemy" },
    ],
    screenshot: careBnbHome,
    github: "https://github.com/QuintinHull/CareBnB",
    site: "https://care-b-n-b.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto pt-20 pb-20 pl-5 pr-5 space-y-10">
        <div className="text-4xl font-extrabold flex">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            some of my work.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {projects.map((project) => (
            <div className="mx-auto select-none flex flex-col justify-between min-w-[300px] max-w-[430px] bg-slate-900 shadow-lg rounded-xl transition ease-in-out hover:scale-110 ">
              {/* <div>
                <img
                  className="aspect-[3/2] w-full rounded-t-xl"
                  src={project.screenshot}
                />
              </div> */}
              <div className="flex flex-col items-between px-4 py-3">
                <div className="">
                  <p className="text-lg font-bold mb-1 text-white">
                    {project.name}
                  </p>
                  <p className="text-md mb-5 text-slate-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {project.technologies.map((technology) => (
                    <div className="flex items-center justify-center mr-3 mb-3 bg-slate-400 px-2 py-1 rounded-full">
                      {technology.name !== "SQLAlchemy" && (
                        <img
                          className="w-[15px] mr-2"
                          src={technology.icon}
                          alt="skill"
                        />
                      )}
                      <p className="text-sm select-none">{technology.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <a
                  className="hover:bg-sky-500 rounded-bl-lg h-10 text-slate-300 flex items-center justify-center"
                  href={project.site}
                  target="_blank"
                >
                  Live site
                </a>
                <a
                  className="hover:bg-sky-500 rounded-br-lg h-10 text-slate-300 flex items-center justify-center"
                  href={project.github}
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
