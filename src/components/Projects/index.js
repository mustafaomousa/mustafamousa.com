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
    <section className="bg-slate-200" id="projects">
      <div className="container mx-auto min-h-[50vh] p-20 space-y-20">
        <div className="text-4xl font-extrabold flex">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            some of my work.
          </span>
        </div>
        <div className="space-y-20">
          {projects.map((project) => (
            <div>
              <div className="flex justify-end mb-4 space-x-3">
                <div className="hover:from-purple-500 hover:to-sky-500 rounded-full bg-gradient-to-r from-sky-500 to-purple-500">
                  <button className="rounded-full bg-slate-200 m-0.5 pl-2.5 pr-2.5">
                    GitHub
                  </button>
                </div>
                <div className="hover:from-purple-500 hover:to-sky-500 rounded-full bg-gradient-to-r from-sky-500 to-purple-500">
                  <button className="rounded-full bg-slate-200 m-0.5 pl-2.5 pr-2.5">
                    Live Site
                  </button>
                </div>
              </div>
              <div className="flex  justify-between bg-white shadow-lg rounded-sm">
                <div className="flex flex-col justify-between p-10">
                  <div className="">
                    <p className="text-2xl font-bold mb-2">{project.name}</p>
                    <p className="text-md mb-5">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap">
                    {project.technologies.map((technology) => (
                      <div className="flex mr-2 items-center justify-center w-[100px] h-[50px] transition ease-in-out hover:scale-110">
                        {technology.name !== "SQLAlchemy" && (
                          <img
                            className="w-[20px] mr-2"
                            src={technology.icon}
                            alt="skill"
                          />
                        )}
                        <p className="text-sm select-none">{technology.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="max-w-[500px]">
                  <img
                    className="object-contain p-10"
                    src={project.screenshot}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
