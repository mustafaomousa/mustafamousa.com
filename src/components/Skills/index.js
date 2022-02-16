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

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto min-h-screen p-20 space-y-20">
        <div className="space-y-10">
          <div className="flex">
            <p className="bg-gradient-to-r from-sky-500 to-purple-500 w-auto text-2xl p-2 text-white">
              my technical skills.
            </p>
          </div>
          <div className="flex flex-wrap">
            {myskills.map((skill) => (
              <div className="flex flex-col items-center justify-center bg-slate-50 rounded-lg w-[150px] h-[150px] m-5 space-y-2 shadow-md transition ease-in-out hover:scale-110">
                {skill.name !== "SQLAlchemy" && (
                  <img
                    src={skill.icon}
                    alt="skill"
                    style={{ width: 50, height: 50 }}
                  />
                )}
                <p className="text-lg select-none">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
