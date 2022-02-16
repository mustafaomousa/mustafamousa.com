const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto pt-20 pb-20 pl-5 pr-5 space-y-10">
        <div className="text-4xl font-extrabold flex">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            lets connect!
          </span>
        </div>
        <div className="flex justify-evenly">
          <p className="text-2xl text-sky-100">+1 817 239 3031</p>
          <p className="text-2xl text-sky-100">contact@mustafamousa.com</p>
          <p className="text-2xl text-sky-100">LinkedIn</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
