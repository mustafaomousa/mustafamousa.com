import SectionContainer from "../../styled/SectionContainer";
import SectionTitle from "../../styled/SectionTitle";

const education = [
  {
    type: "Full Stack Engineering",
    location: "App Academy",
    description:
      "Programming Fundamentals, Computer Science, Front-End Engineering I, Back-End Engineering, Python, Portfolio Strategies, Front End Engineering II, Job Search Strategies.",
    period: "2020-2021",
  },
  {
    type: "Biology",
    location: "University of Texas at Arlington",
    description:
      "Completed 25 credit hours towards a BA of Science in Biology.",
    period: "2015-2016",
  },
];

const Education = () => {
  return (
    <section id="education">
      <SectionContainer>
        <SectionTitle>my education.</SectionTitle>
        <div className="space-y-5">
          {education.map((edu) => (
            <div className="p-5 shadow hover:shadow-md bg-white">
              <div className="mb-5 font-bold">
                <div className="flex text-stone-700 text-sm lg:text-md">
                  <p className="grow">{edu.location}</p>
                  <p>{edu.period}</p>
                </div>
                <p className="text-sm text-purple-800 ">{edu.type}</p>
              </div>
              <div>
                <p className="text-sm lg:text-md text-stone-700">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Education;
