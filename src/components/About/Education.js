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
  return education.map((edu) => (
    <div className="rounded border shadow hover:scale-[102%] hover:shadow-lg p-4 bg-white transition-all ease-in-out h-15">
      <div className="mb-5">
        <div className="flex text-stone-700 text-sm lg:text-md">
          <p className="grow">{edu.location}</p>
          <p>{edu.period}</p>
        </div>
        <p className="text-sm text-purple-500 font-bold">{edu.type}</p>
      </div>
      <div>
        <p className="text-sm lg:text-md text-stone-700">{edu.description}</p>
      </div>
    </div>
  ));
};

export default Education;
