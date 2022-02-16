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
        <div>
          <div className="text-4xl font-extrabold flex pb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
              a little about me.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <img src={aboutme} className="float-left w-[80px] mr-2" />
              <p className="antialiased text-md md:text-lg text-slate-100">
                I'm currently a software engineer with over four years of
                experience in technology implementations and training. I'm from
                Texas. I engineer and develop full stack applications. I like to
                work with a collaborative team and amazing companies that
                provide growth.
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-bold text-slate-500">Name</p>
                <p className="antialiased text-md md:text-lg text-slate-100">
                  Mustafa Mousa
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">Location</p>
                <p className="antialiased text-md md:text-lg text-slate-100">
                  Dallas, Texas
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">Phone</p>
                <p className="antialiased text-md md:text-lg text-slate-100">
                  +1 817 239 3031
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">Email</p>
                <p className="antialiased text-md md:text-lg text-slate-100">
                  contact@mustafamousa.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-4xl font-extrabold flex pb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
              my experience.
            </span>
          </div>
          <div className="space-y-5">
            {experience.map((job) => (
              <div>
                <div></div>
                <div>
                  <p className="text-xl font-bold text-slate-100">
                    {job.company}
                  </p>
                  <p className="text-md pb-2 text-slate-100">{job.title}</p>
                  <ul className="">
                    {job.bullets.map((point) => (
                      <li className="text-sm text-slate-400">
                        <p>- {point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-4xl font-extrabold flex pb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
              my education.
            </span>
          </div>
          <div className="space-y-5">
            {education.map((edu) => (
              <div>
                <div></div>
                <div>
                  <p className="text-xl font-bold text-slate-100">
                    {edu.location}
                  </p>
                  <p className="text-md pb-2 text-slate-100">
                    {edu.type} - {edu.period}
                  </p>
                  <p className="text-sm text-slate-400">- {edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
