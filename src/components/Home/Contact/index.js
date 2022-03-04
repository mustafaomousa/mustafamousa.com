import {
  AiFillPhone,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pt-10 gap-2 text-xs md:text-sm">
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
  );
};

export default Contact;
