const Navigation = ({ sections }) => {
  return (
    <nav className="fixed w-full shadow-lg bg-gray-900">
      <div className="flex justify-between items-center max-w-7xl h-14 mx-auto">
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
        <div className="space-x-4">
          <div className="hover:animate-pulse rounded-full bg-gradient-to-r from-sky-500 to-purple-500">
            <button className="rounded-full bg-gray-900 m-0.5 pl-2.5 pr-2.5 pt-0.2 pb-0.2 text-white">
              Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
