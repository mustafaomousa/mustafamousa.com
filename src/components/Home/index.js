import {
  AiFillPhone,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import SectionContainer from "../../styled/SectionContainer";
import proud from "./proud-se.svg";

const Home = () => {
  return (
    <section id="home">
      <SectionContainer className="flex items-center px-5 py-20 mx-auto max-w-7xl">
        <div className="flex flex-col items-center w-full space-y-5">
          <div className="flex items-end space-x-5">
            <img
              src={proud}
              className="aspect-[1/1] w-[110px] md:w-[130px] lg:w-[160px]"
            />
            <div className="flex flex-col">
              <div className="text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 ">
                  Hey there,
                </span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 ">
                  I'm Mustafa.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-2 text-xs md:text-sm">
            <a
              href="tel:817-239-3031"
              className="bg-indigo-500 text-stone-50 shadow flex items-center justify-center rounded-full px-2 py-1 space-x-2"
            >
              <AiFillPhone /> <p>817 239 3031</p>
            </a>
            <a
              href="mailto:mustafaomousa@icloud.com"
              className="bg-indigo-500 text-stone-50 shadow flex items-center justify-center rounded-full px-2 py-1 space-x-2"
            >
              <AiFillMail /> <p>mustafaomousa@icloud.com</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mustafa-m-8b8053157/"
              className="bg-indigo-500 text-stone-50 shadow flex items-center justify-center rounded-full px-2 py-1 space-x-2"
            >
              <AiFillLinkedin /> <p>LinkedIn</p>
            </a>
            <a
              target="_blank"
              href="https://github.com/mustafaomousa"
              className="bg-indigo-500 text-stone-50 shadow flex items-center justify-center rounded-full px-2 py-1 space-x-2"
            >
              <AiFillGithub /> <p>Github</p>
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Home;
