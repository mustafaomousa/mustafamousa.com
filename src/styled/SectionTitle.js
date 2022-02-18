const SectionTitle = (props) => (
  <div className="text-lg md:text-2xl font-bold flex pb-5 ">
    <p
      {...props}
      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-purple-50 px-2"
    ></p>
  </div>
);

export default SectionTitle;
