import { useEffect, useState } from "react";

const Navigation = ({ sections }) => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        return setAtTop(true);
      }
      return setAtTop(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`pl-10 pr-10 fixed w-full bg-purple-500 ${
        atTop ? "" : "shadow-md"
      } z-[100] transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-end items-center h-[50px] mx-auto space-x-5">
        <div>
          {/* <p className="text-xs text-stone-500">Phone</p> */}
          <p className="text-sm text-purple-700">+1 817 239 3031</p>
        </div>
        <div>
          {/* <p className="text-xs text-stone-500">Email</p> */}
          <p className="text-sm text-purple-700">mustafaomousa@icloud.com</p>
        </div>
        <div>
          {/* <p className="text-xs text-stone-500">LinkedIn</p> */}
          <a
            className="text-sm text-purple-700"
            href="https://www.linkedin.com/in/mustafa-m-8b8053157/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          {/* <p className="text-xs text-stone-500">LinkedIn</p> */}
          <a
            className="text-sm text-purple-700"
            href="https://github.com/mustafaomousa"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
