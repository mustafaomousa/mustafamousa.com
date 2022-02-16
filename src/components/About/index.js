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

const About = () => {
  return (
    <section className="bg-slate-300" id="about">
      <div className="container mx-auto min-h-screen p-20 space-y-20">
        <div className="space-y-10">
          <div className="flex">
            <p className="bg-gradient-to-r from-sky-500 to-purple-500 w-auto text-2xl p-2 text-white">
              a little about me.
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm font-bold">Name</p>
            <p className="antialiased text-md md:text-lg lg:text-xl">
              Mustafa Mousa
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm font-bold">Location</p>
            <p className="antialiased text-md md:text-lg lg:text-xl">
              Dallas, Texas
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm font-bold">Phone</p>
            <p className="antialiased text-md md:text-lg lg:text-xl">
              +1 817 239 3031
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm font-bold">Email</p>
            <p className="antialiased text-md md:text-lg lg:text-xl">
              contact@mustafamousa.com
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm font-bold">Summary</p>
            <p className="antialiased text-md md:text-lg lg:text-xl">
              I'm currently a software engineer with over four years of
              experience in technology implementations and training. I'm from
              Fort Worth, Texas. I engineer and develop full stack applications.
              I like to work with a collaborative team and amazing companies
              that provide growth.
            </p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex">
            <p className="bg-gradient-to-r from-sky-500 to-purple-500 w-auto text-2xl p-2 text-white">
              my experience.
            </p>
          </div>
          {experience.map((job) => (
            <div>
              <div></div>
              <div>
                <p className="text-xl font-bold">{job.company}</p>
                <p className="text-lg mb-2">{job.title}</p>
                <ul className="list-disc pl-10">
                  {job.bullets.map((point) => (
                    <li>
                      <p className="text-sm">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-10">
          <div className="flex">
            <p className="bg-gradient-to-r from-sky-500 to-purple-500 w-auto text-2xl p-2 text-white">
              my education.
            </p>
          </div>
          {education.map((edu) => (
            <div>
              <div></div>
              <div>
                <p className="text-xl font-bold">{edu.location}</p>
                <p className="text-lg mb-2">
                  {edu.type} - {edu.period}
                </p>
                <p className="text-sm">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
