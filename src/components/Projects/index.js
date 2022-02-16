import rumblrHome from "./rumblr-home.png";
import audifamilyThread from "./audifamily-thread.png";
import encephascapeBrainfolio from "./encephascape-brainfolio.png";
import careBnbHome from "./carebnb-home.png";
import icons from "../../icons";

const myskills = [
  { name: "JavaScript", icon: icons.javascript },
  { name: "Python", icon: icons.python },
  { name: "NodeJS", icon: icons.nodedotjs },
  { name: "TypeScript", icon: icons.typescript },
  { name: "React", icon: icons.react },
  { name: "React Native", icon: icons.react },
  { name: "Flask", icon: icons.flask },
  { name: "Express", icon: icons.express },
  { name: "PostgreSQL", icon: icons.postgresql },
  { name: "Sequelize", icon: icons.sequelize },
  { name: "SQLAlchemy" },
  { name: "MongoDb", icon: icons.mongodb },
  { name: "Cypress", icon: icons.cypress },
];

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
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div className="flex flex-col justify-between max-w-[430px] bg-slate-900 shadow-lg rounded-xl">
              {/* <div>
                <img
                  className="aspect-[3/2] w-full rounded-t-xl"
                  src={project.screenshot}
                />
              </div> */}
              <div className="flex flex-col items-between px-6 py-3">
                <div className="">
                  <p className="text-lg font-bold mb-1 text-white">
                    {project.name}
                  </p>
                  <p className="text-md mb-5 text-sky-500">
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
                <button className="hover:bg-sky-500 rounded-bl-lg h-10 text-slate-300">
                  Live site
                </button>
                <button className="hover:bg-sky-500 rounded-br-lg h-10 text-slate-300">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
