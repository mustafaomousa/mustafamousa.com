import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import aboutme from "./about-me.jpeg";

const experience = [
  {
    title: "Content Manager",
    company: "Horse Alley",
    period: "July 2018 - September 2020",
    bullets: [
      "Oversaw client update requests, utilizing WordPress to implement the updates.",
      "Utilized Photoshop to alter and optimize client supplied materials prior to site development.",
    ],
    type: "Part Time",
  },
  {
    title:
      "Audi Brand Specialist, Audi Technology Specialist, Temporary Executive Assistant",
    company: "Audi Fort Worth",
    period: "August 2016 - March 2020",
    bullets: [
      "Implemented personal training sessions with new Audi owners as well as staff to promote client retention.",
      "Facilitated the launch of a new client CRM during a software transition amongst our team.",
      "Performed at local auto shows in the Dallas Fort Worth metroplex in order to promote the Audi brand and drive local dealer traffic.",
      "Audited lease and finance agreements to identify missing documents prior to submission.",
    ],
    type: "Full Time",
  },
  {
    title: "Assistant Manager",
    company: "Paul's Donuts Subs & Gyros",
    period: "June 2014 - June 2016",
    bullets: [
      "Facilitated one on one training to ensure quality assurance and a professional work environment.",
      "Oversaw hospital accounts to ensure long lasting business relations.",
      "Organized and documented inventory to ensure fluidity of food production.",
    ],
    type: "Full Time",
  },
];

const education = [
  {
    type: "Full Stack Engineering",
    location: "App Academy",
    description:
      "Programming Fundamentals, Computer Science, Front-End Engineering I, Back-End Engineering, Python, Portfolio Strategies, Front End Engineering II, Job Search Strategies.",
    period: "2020-2021",
  },
  {
    type: "Biology",
    location: "University of Texas at Arlington",
    description:
      "Completed 25 credit hours towards a BA of Science in Biology.",
    period: "2015-2016",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="section">
        <Typography variant="h2" className="section-header">
          About
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="bubble-container-2">
              <Grid className="padding-medium-top-bottom" container>
                <Grid item md={12} lg={3}>
                  <div className="flex-row-center-center">
                    <img className="aboutme-avatar" src={aboutme} />
                  </div>
                </Grid>
                <Grid item md={12} lg={9}>
                  <Typography variant="body1" lineHeight={2}>
                    I'm currently a Full-Stack Developer and a prior Audi Brand
                    Specialist with over 4 years of experience in technology
                    implementations and training. I'm from Fort Worth, Texas. I
                    engineer and develop full stack applications. I like to work
                    with a collaborative team and amazing companies that provide
                    growth.
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="bubble-container-2">
              <List disablePadding>
                <ListItem>
                  <ListItemText primary="Name" secondary="Mustafa Mousa" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Birthday" secondary="July 25th" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Location" secondary="Dallas, Texas" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone" secondary="+1 817 239 3031" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Email"
                    secondary="contact@mustafamousa.com"
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
        <Typography className="section-header" variant="h2">
          Experience
        </Typography>
        <Grid container spacing={2}>
          {experience.map((job, i) => (
            <Grid item width="100%">
              <div className="experience-bubble-container" key={i}>
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={12} lg={3}>
                    <Typography variant="h6">{job.company}</Typography>
                    <Typography variant="caption">
                      {job.period} - {job.type}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={9}>
                    <Typography variant="h6">{job.title}</Typography>
                    {job.bullets.map((bullet, idx) => (
                      <ListItem key={idx}>
                        <ListItemText
                          primary={
                            <Typography variant="body2">{bullet}</Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h2" className="section-header">
          Education
        </Typography>
        <Grid container spacing={2}>
          {education.map((edu, i) => (
            <Grid item key={i} width="100%">
              <div className="education-bubble-container">
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} lg={3}>
                    <SchoolIcon />
                    <Typography variant="h6">{edu.type}</Typography>
                    <Typography variant="caption">{edu.location}</Typography>
                  </Grid>
                  <Grid item xs={12} lg={9}>
                    <Typography variant="body2">{edu.description}</Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
