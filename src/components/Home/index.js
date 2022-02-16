import proud from "./home-banner.png";

const Home = () => {
  return (
    <section id="home">
      <div className="container flex items-center justify-center mx-auto py-20 px-5 min-h-screen">
        {/* <img
          className="transition-all ease-in-out w-[100px] md:w-[150px] lg:w-[200px] aspect-auto"
          src={proud}
        /> */}
        <div className="flex flex-col">
          <p className="antialiased font-bold text-white text-3xl md:text-4xl lg:text-5xl">
            I'm Mustafa,
          </p>
          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold flex ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500 ">
              a software engineer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
