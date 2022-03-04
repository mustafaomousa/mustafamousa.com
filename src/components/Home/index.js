import SectionContainer from "../../styled/SectionContainer";
import Contact from "./Contact";
import image from "./proud-se.svg";
import me from "./home-banner.png";

const Home = () => {
  return (
    <section id="home">
      <SectionContainer className="flex items-center justify-start pb-20 mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex max-h-[220px] space-x-4">
            <div>
              <img
                src={me}
                className="max-h-[220px] object-contain invisible md:visible w-0 md:w-auto"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-4xl md:text-5xl lg:text-6xl transition-all">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 ">
                  Hey there,
                </span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold transition-all">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 ">
                  I'm Mustafa.
                </span>
              </div>
              <p className="text-indigo-900 grow text-sm md:text-lg transition-all">
                <span className="font-bold">Software engineer</span> with
                proficiency in <span className="font-bold">Python</span>,{" "}
                <span className="font-bold">JavaScript</span>, and additional
                frameworks/technologies.
              </p>
              <div className="flex">
                <a
                  target="_blank"
                  href="https://mustafaomousa.s3.us-east-2.amazonaws.com/mousa_mustafa_resume.pdf"
                  className="text-xs mt-5 bg-indigo-500 text-stone-50 shadow flex items-center justify-center rounded-full px-2 py-1 space-x-2"
                >
                  Download my resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Home;
