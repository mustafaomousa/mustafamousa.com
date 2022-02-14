import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section">
        <Typography variant="h3">Let's connect!</Typography>
        <Grid container>
          <Grid item xs={5}>
            <Box
              component="form"
              autoComplete="off"
              sx={{
                "& .MuiTextField-root": { mb: 1, mt: 1 },
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField required label="Name" fullWidth />
                <TextField required label="Email" fullWidth />
                <TextField
                  required
                  label="Message"
                  multiline
                  minRows={6}
                  fullWidth
                />
                <Button variant="outlined">Submit</Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
