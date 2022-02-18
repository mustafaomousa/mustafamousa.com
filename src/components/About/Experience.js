const experience = [
  {
    title: "Content Manager",
    company: "Horse Alley",
    period: "July 2018 - September 2020",
    bullets: [
      "Oversaw client update requests, utilizing WordPress to implement the updates.",
      "Utilized Photoshop to alter and optimize client supplied materials prior to site development.",
    ],
    type: "Part Time",
  },
  {
    title:
      "Audi Brand Specialist, Audi Technology Specialist, Executive Assistant",
    company: "Audi Fort Worth",
    period: "August 2016 - March 2020",
    bullets: [
      "Implemented personal training sessions with new Audi owners as well as staff to promote client retention.",
      "Facilitated the launch of a new client CRM during a software transition amongst our team.",
      "Performed at local auto shows in the Dallas Fort Worth metroplex in order to promote the Audi brand and drive local dealer traffic.",
      "Audited lease and finance agreements to identify missing documents prior to submission.",
    ],
    type: "Full Time",
  },
  {
    title: "Assistant Manager",
    company: "Paul's Donuts Subs & Gyros",
    period: "June 2014 - June 2016",
    bullets: [
      "Facilitated one on one training to ensure quality assurance and a professional work environment.",
      "Oversaw hospital accounts to ensure long lasting business relations.",
      "Organized and documented inventory to ensure fluidity of food production.",
    ],
    type: "Full Time",
  },
];

const Experience = () => {
  return experience.map((job) => (
    <div className="border rounded shadow hover:scale-[102%] hover:shadow-lg p-4 bg-white transition-all ease-in-out">
      <div className="mb-5">
        <div className="flex text-stone-700 text-sm lg:text-md">
          <p className="grow">{job.company}</p>
          <p>{job.period}</p>
        </div>
        <p className="text-sm text-purple-600 font-bold">{job.title}</p>
      </div>
      <div>
        <ul className="list-none space-y-3 text-sm lg:text-md text-stone-700">
          {job.bullets.map((point) => (
            <li>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
};

export default Experience;
