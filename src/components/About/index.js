import aboutme from "./about-me.jpeg";

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
      "Audi Brand Specialist, Audi Technology Specialist, Temporary Executive Assistant",
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

const info = [
  { type: "Name", value: "Mustafa Mousa" },
  { type: "Location", value: "Dallas, Texas" },
];

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto pt-20 pb-20 pl-5 pr-5 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-10">
            <div>
              <div className="text-4xl font-extrabold flex pb-5">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
                  a little about me.
                </span>
              </div>
              <img
                src={aboutme}
                className="float-left max-w-[80px] md:max-w-[125px] mr-4 rounded-lg grayscale shadow-lg mx-auto "
              />
              <p className="pixel-antialiased text-lg md:text-xl lg:text-3xl font-bold text-slate-300">
                I'm currently a software engineer with over four years of
                experience in technology implementations and training. I'm from
                Texas. I engineer and develop full stack applications. I like to
                work with a collaborative team and amazing companies that
                provide growth.
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold flex pb-5">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
                  my education.
                </span>
              </div>
              <div className="space-y-10">
                {education.map((edu) => (
                  <div className="rounded-lg shadow-lg hover:scale-105 px-10 py-5 bg-slate-900 transition ease-in-out ">
                    <div className="mb-5">
                      <p className="pixel-antialiased text-lg md:text-lg font-extrabold text-white">
                        {edu.location}
                      </p>
                      <p className="antialiased text-lg md:text-md font-bold text-sky-500">
                        {edu.type}
                      </p>
                      <p className="antialiased text-sm text-sky-100">
                        {edu.period}
                      </p>
                    </div>
                    <div>
                      <p className="antialiased leading-relaxed text-md text-slate-400 ">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold flex pb-5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
                my experience.
              </span>
            </div>
            <div className="space-y-10">
              {experience.map((job) => (
                <div className="rounded-lg shadow-lg hover:scale-105 px-10 py-5 bg-slate-800 transition ease-in-out ">
                  <div className="mb-5">
                    <p className="pixel-antialiased text-lg md:text-lg font-extrabold text-white">
                      {job.company}
                    </p>
                    <p className="antialiased text-lg md:text-md font-bold text-sky-500">
                      {job.title}
                    </p>
                    <p className="antialiased text-sm text-sky-100">
                      {job.period}
                    </p>
                  </div>
                  <div>
                    <ul className="list-disc">
                      {job.bullets.map((point) => (
                        <li className="antialiased leading-relaxed text-md text-slate-400 ">
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
