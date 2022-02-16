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
      <div className="section">
        <h2 className="section-header">Technical skills</h2>
        <div>
          {myskills.map((skill, i) => (
            <div className="skill-bubble-container flex-column-center-center">
              {skill.name !== "SQLAlchemy" && (
                <img
                  src={skill.icon}
                  alt="skill"
                  style={{ width: 50, height: 50 }}
                />
              )}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
