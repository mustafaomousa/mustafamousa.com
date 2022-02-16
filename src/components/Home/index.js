const Home = () => {
  return (
    <section id="home">
      <div className="flex items-center justify-center pl-12 pr-12 pt-20 h-screen">
        <div className="space-y-4 flex flex-col justify-end">
          <p className="text-slate-100 md:text-4xl lg:text-6xl xl:text-8xl">
            Hey there
          </p>
          <p className="shadow-2xl bg-gradient-to-r from-sky-500 to-purple-500 text-slate-100 md:text-5xl lg:text-7xl xl:text-9xl">
            I'm Mustafa.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;
