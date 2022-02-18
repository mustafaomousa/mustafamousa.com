const SectionTitle = (props) => (
  <div className="text-2xl font-bold flex pb-5">
    <span
      {...props}
      className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
    ></span>
  </div>
);

export default SectionTitle;
