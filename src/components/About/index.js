import SectionContainer from "../../styled/SectionContainer";
import SectionTitle from "../../styled/SectionTitle";
import aboutme from "./home-banner.png";

const About = () => {
  return (
    <section id="about">
      <SectionContainer>
        <SectionTitle>a little about me.</SectionTitle>
        <div className="min-h-[280px]">
          <img
            src={aboutme}
            className="float-left object-cover object-center w-[100px] md:w-[100px] aspect-[1/3] object-cover mr-2 [clip-path:circle(37%_at_10%_20%)] [shape-outside:circle(37%_at_10%_20%)]"
          />
          <p className="leading-relaxed text-stone-700">
            Thank you for visiting my portfolio site! I'm currently a software
            engineer with over four years of experience in technology
            implementations and training. Currently located in North Texas, I
            engineer and develop full stack applications utilizing either
            Python/Javascript as a backend language while utilizing Javascript
            coupled with React.js for the front end. I like to work with a team
            and amazing companies that provide personal and professional growth.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
};

export default About;
