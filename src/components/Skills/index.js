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
  { name: "MongoDb", icon: icons.mongodb },
  { name: "Cypress", icon: icons.cypress },
  { name: "SQLAlchemy" },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto py-20 px-5 space-y-10">
        <div className="text-4xl font-extrabold flex">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            my technical skills
          </span>
        </div>
        <div className="flex flex-wrap gap-5">
          {myskills.map((skill) => (
            <div className="flex flex-col items-center justify-center w-[120px] h-[120px] space-y-1  transition ease-in-out hover:scale-110 rounded-xl">
              {skill.name !== "SQLAlchemy" && (
                <img
                  className="select-none bg-sky-500 p-5 rounded-full"
                  src={skill.icon}
                  alt="skill"
                  style={{ width: 80, height: 80 }}
                />
              )}
              <p className="text-md select-none text-white font-bold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
