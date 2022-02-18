import SectionContainer from "../../styled/SectionContainer";
import proud from "./proud-se.svg";

const Home = () => {
  return (
    <section id="home" className="bg-purple-100">
      <SectionContainer className="flex items-center px-5 mx-auto max-w-7xl  h-[50vh]">
        <div className="w-full flex items-end justify-center space-x-5">
          <img src={proud} className="aspect-[1/1] w-[110px] md:w-[200px]" />
          <div className="flex flex-col">
            <p className="antialiased text-indigo-500 text-2xl md:text-3xl lg:text-4xl font-bold">
              Hey there
            </p>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 ">
                I'm Mustafa.
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Home;
