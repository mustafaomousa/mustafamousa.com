import { AppBar, Button, Container, CssBaseline, Toolbar } from "@mui/material";

const Navigation = ({ sections }) => {
  return (
    <AppBar fixed="true" color="transparent" elevation={false}>
      <Container maxWidth="xl">
        <Toolbar>
          {sections.map((section) => (
            <Button color="secondary" key={section.name} href={section.href}>
              {section.name}
            </Button>
          ))}
        </Toolbar>
      </Container>
      <CssBaseline />
    </AppBar>
  );
};

export default Navigation;
