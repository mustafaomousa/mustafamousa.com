import { Divider, Grid, Typography } from "@mui/material";

const Skills = () => {
  return (
    <section id="skills">
      <div className="section">
        <Typography variant="h3">My skillset</Typography>
        <Divider />
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              I'm currently a Full-Stack Developer and a prior Audi Brand
              Specialist with over 4 years of experience in technology
              implementations and training. I'm from Fort Worth, Texas. I
              engineer and develop full stack applications. I like to work with
              a collaborative team and amazing companies that provide growth.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
