import me from "./home-banner.png";

const Home = () => {
  return (
    <section id="home">
      <div className="section flex-row-start-center">
        <div className="flex-row-center-end">
          <div>
            <img className="home-me" src={me} style={{ height: "500px" }} />
          </div>
          <div>
            <h2>Hey there,</h2>
            <h1>I'm Mustafa.</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
