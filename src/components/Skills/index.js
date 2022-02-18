import icons from "../../icons";
import SectionContainer from "../../styled/SectionContainer";
import SectionTitle from "../../styled/SectionTitle";

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
      <SectionContainer>
        <SectionTitle>my technical skills and tools.</SectionTitle>
        <div className="flex snap-x snap-mandatory overflow-scroll space-x-5 pb-5">
          {myskills.map((skill) => (
            <div className="shadow rounded-full snap-start flex flex-col items-center justify-center bg-white min-w-[90px] min-h-[90px]">
              {skill.name !== "SQLAlchemy" ? (
                <img className="w-[30px] h-[30px]" src={skill.icon} />
              ) : (
                <div className="select-none rounded-full" />
              )}
              <p className="text-xs text-purple-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Skills;
