const Navigation = ({ sections }) => {
  return (
    <div>
      <div>
        <div style={{ flexGrow: 1 }}>
          {sections.map((section) => (
            <a key={section.name} href={section.href}>
              {section.name}
            </a>
          ))}
        </div>
        {/* <IconButton color="inherit">
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
          </IconButton> */}
      </div>
    </div>
  );
};

export default Navigation;
