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
      className={`pl-10 pr-10 fixed w-full bg-[#2E3544] ${
        atTop ? "" : "shadow-lg"
      } z-[100] transition-shadow duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center h-14 mx-auto">
        <p className="text-lg font-bold text-sky-100">Mustafa Mousa</p>
        <div className="space-x-4">
          {sections.map((section) => (
            <a
              className="text-slate-100 hover:underline underline-offset-2 decoration-sky-500"
              key={section.name}
              href={section.href}
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
