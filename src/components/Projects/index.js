import rumblrHome from "./rumblr-home.png";
import audifamilyThread from "./audifamily-thread.png";
import encephascapeBrainfolio from "./encephascape-brainfolio.png";
import careBnbHome from "./carebnb-home.png";
import icons from "../../icons";
import SectionTitle from "../../styled/SectionTitle";
import SectionContainer from "../../styled/SectionContainer";

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
      <SectionContainer>
        <SectionTitle>some of my work.</SectionTitle>
        <div className="flex overflow-scroll snap-x space-x-5 pb-5">
          {projects.map((project) => (
            <div className="snap-start shadow rounded snap-start min-w-[320px] bg-white">
              <div className="flex flex-col justify-between">
                <div>
                  <img
                    className="aspect-[3/2] w-full rounded-t"
                    src={project.screenshot}
                  />
                </div>
                <div className="flex flex-col items-between px-4 py-3">
                  <div className="">
                    <p className="text-md font-bold mb-1 text-purple-600">
                      {project.name}
                    </p>
                    <p className="text-sm mb-5 text-stone-700">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap">
                    {project.technologies.map((technology) => (
                      <div className="flex items-center justify-center mr-3 mb-3 bg-indigo-100 px-2 py-1 rounded-full">
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
                <div className="grid grid-cols-2 bg-white rounded-b h-10 text-stone-700 uppercase text-xs">
                  <a
                    className="hover:bg-indigo-100 ease-in-out transition-all hover:rounded-bl flex items-center justify-center"
                    href={project.site}
                    target="_blank"
                  >
                    Live site
                  </a>
                  <a
                    className="hover:bg-indigo-100 ease-in-out transition-all hover:rounded-br flex items-center justify-center"
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Projects;
