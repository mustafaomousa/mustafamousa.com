const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto pt-20 pb-20 pl-5 pr-5 space-y-10">
        <div className="text-4xl font-extrabold flex">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            lets connect!
          </span>
        </div>
        <div className="space-y-3 w-full max-w-[400px]">
          <div>
            <p className="text-slate-300 font-bold pb-2 pl-2">Name</p>
            <input className="text-xl rounded-xl pl-3 pr-2 pt-0.5 pb-0.5 w-full" />
          </div>
          <div>
            <p className="text-slate-300 font-bold pb-2 pl-2">Email</p>
            <input className="text-xl rounded-xl pl-3 pr-2 pt-0.5 pb-0.5 w-full" />
          </div>
          <div>
            <p className="text-slate-300 font-bold pb-2 pl-2">Message</p>
            <textarea
              rows={5}
              className="text-xl rounded-xl pl-3 pr-2 pt-0.5 pb-0.5 w-full"
            />
          </div>
          <div className="flex justify-end">
            <div className="hover:from-purple-500 hover:to-sky-500 rounded-full bg-gradient-to-r from-sky-500 to-purple-500">
              <button className="rounded-full bg-[#2E3544] m-0.5 pl-2.5 pr-2.5 pt-0.2 pb-0.2 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
