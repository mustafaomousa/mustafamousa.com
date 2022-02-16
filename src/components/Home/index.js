const Home = () => {
  return (
    <section id="home">
      <div className="flex items-center justify-center pl-12 pr-12 min-h-[50vh]">
        <div className="space-y-4 flex flex-col justify-end">
          <p className="antialiased text-white text-xl md:text-4xl lg:text-6xl 2xl:text-8xl">
            Hey there
          </p>
          <p className="antialiased shadow-2xl bg-gradient-to-r from-sky-500 to-purple-500 text-white text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl">
            I'm Mustafa.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;
