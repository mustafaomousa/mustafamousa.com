import proud from "./proud-se.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="flex items-center justify-center flex-wrap min-h-screen">
        <div className="space-y-2 flex flex-col ml-10">
          <p className="antialiased text-white text-2xl md:text-4xl lg:text-6xl ">
            Hey there
          </p>
          <p className="antialiased shadow-2xl bg-gradient-to-r from-sky-500 to-purple-500 text-white text-3xl md:text-5xl lg:text-7xl">
            I'm Mustafa.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;
