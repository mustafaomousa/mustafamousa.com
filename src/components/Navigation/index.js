import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Navigation = ({ sections }) => {
  return (
    <AppBar fixed="true" color="inherit" elevation={false}>
      <Container maxWidth="xl">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <Button color="inherit" key={section.name} href={section.href}>
                {section.name}
              </Button>
            ))}
          </div>
          <div>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <IconButton color="inherit">
              <PhoneIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
      <CssBaseline />
    </AppBar>
  );
};

export default Navigation;
