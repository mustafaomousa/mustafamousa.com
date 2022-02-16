import proud from "./home-banner.png";

const Home = () => {
  return (
    <section id="home">
      <div className="container flex items-end mx-auto py-20 px-5">
        <img
          className="transition-all ease-in-out w-[100px] md:w-[150px] lg:w-[200px] aspect-auto"
          src={proud}
        />

        <div className="space-y-2 flex flex-col ml-10">
          <p className="antialiased font-bold text-white text-lg md:text-xl lg:text-2xl">
            Hey there
          </p>
          <p className="antialiased font-bold text-white text-2xl md:text-3xl lg:text-4xl">
            I'm Mustafa
          </p>
          <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold flex">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
              a software engineer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
