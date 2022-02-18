import SectionContainer from "../../styled/SectionContainer";
import SectionTitle from "../../styled/SectionTitle";
import aboutme from "./about-me.jpeg";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-purple-100 to-indigo-100"
    >
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-10 pb-10">
            <div>
              <SectionTitle>a little about me.</SectionTitle>
              <img
                src={aboutme}
                className="float-left w-[80px] aspect-[1/1] object-cover mr-4 [clip-path:circle(50%)] [shape-outside:circle(50%)] "
              />
              <p className="text-md text-stone-700">
                I'm currently a software engineer with over four years of
                experience in technology implementations and training. I'm from
                Texas. I engineer and develop full stack applications. I like to
                work with a collaborative team and amazing companies that
                provide growth.
              </p>
            </div>
            <div>
              <SectionTitle>my education.</SectionTitle>
              <div className="space-y-5">
                <Education />
              </div>
            </div>
          </div>
          <div>
            <SectionTitle>my experience.</SectionTitle>
            <div className="space-y-5">
              <Experience />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default About;
