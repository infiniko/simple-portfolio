import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-bricolage">
        Connect with me
      </h4>
      <h2 className="text-center text-5xl font-bricolage">Contract</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-bricolage">
        A perfect blend of frontend,backend, cloud, data, and architecture
        skills
      </p>

      <ContactForm />
    </div>
  );
};

export default Contact;
