import SectionContainer from "../../styled/SectionContainer";
import SectionTitle from "../../styled/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="bg-purple-100">
      <SectionContainer>
        {/* <SectionTitle>let's connect!</SectionTitle> */}
        <div className="flex justify-center space-x-5">
          <div>
            <p className="text-xs text-stone-500">Phone</p>
            <p className="text-md text-purple-700 font-bold">+1 817 239 3031</p>
          </div>
          <div>
            <p className="text-xs text-stone-500">Email</p>
            <p className="text-md text-purple-700 font-bold">
              contact@mustafamousa.com
            </p>
          </div>
          <div>
            <p className="text-xs text-stone-500">LinkedIn</p>
            <a className="text-md text-purple-700 font-bold">External Link</a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Contact;
