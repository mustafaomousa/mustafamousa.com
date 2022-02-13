import { Typography } from "@mui/material";
import me from "./home-banner.png";

const Home = () => {
  return (
    <section id="home">
      <div className="section flex-row-center-center">
        <div className="flex-row-center-end">
          <img className="home-me" src={me} />
          <div>
            <Typography variant="h2">Hey there,</Typography>
            <Typography variant="h1">I'm Mustafa.</Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
