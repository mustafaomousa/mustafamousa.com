import { Divider, Grid, Typography } from "@mui/material";
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
        <Typography variant="h2" className="section-header">
          Technical skills
        </Typography>
        <Grid container direction="row" spacing={2}>
          {myskills.map((skill) => (
            <Grid item>
              <div className="skill-bubble-container flex-column-center-center">
                {skill.name !== "SQLAlchemy" && (
                  <img
                    src={skill.icon}
                    alt="skill"
                    style={{ width: 50, height: 50 }}
                  />
                )}
                <Typography variant="button">{skill.name}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
