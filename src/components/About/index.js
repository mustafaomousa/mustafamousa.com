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
          
Hey there, I’m Mustafa I’m currently located in Fort Worth, Texas. A couple of my hobbies & interests are cars, animals, cooking, interior design, and learning random things about almost anything (and also sharing them). I get along well with anyone, and love to be around friends & family.

My career path began by working for Audi Fort Worth as an Audi Brand Ambassador, Technology Specialist, and Executive Assistant. Throughout my duration at Audi Fort Worth, I grew my skills in training, customer support, automotive technical support, and business communication. I’ve attended 3 auto shows in the Dallas / Fort Worth metroplex, promoting our brand and driving dealer traffic. Half way into my four year tenure at Audi Fort Worth, I began managing website content for a local web design company that specializes in the equine (horse) industry. Some of my duties corresponded with collecting, modifying, and updating client data via WordPress. Photoshop was occasionally utilized to uphold image and website content quality.

During the pandemic I applied and was accepted into a 24 week full stack bootcamp called App Academy, which has a low acceptance rate of 5%. Understanding the consequences of obtaining a non-traditional technical certificate while unemployed, I studied, coded, and collaborated for 24 weeks. I was able to master crucial concepts such as Python, JavaScript, SQL along with associated technologies and libraries. Today I’m proud to say I’m a software engineer with multiple tools in my belt, as demonstrated in a couple of my recent full stack projects.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
};

export default About;
