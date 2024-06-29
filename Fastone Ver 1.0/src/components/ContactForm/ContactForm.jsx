const ContactForm = () => {
  return (
    <div className="contactFormWrap relative w-full">
      <form className="grid gap-[1.875rem] md:grid-cols-2 grid-cols-1">
        <div className="fieldBox w-full col-span-2">
          <label className="text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block">
            Write a Message
          </label>
          <textarea className="border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[8rem] md:h-[13.125rem] p-[1.125rem] text-white"></textarea>
        </div>
        <div className="fieldBox w-full">
          <label className="text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block">
            Your Name
          </label>
          <input
            type="text"
            className="border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white"
          ></input>
        </div>
        <div className="fieldBox w-full">
          <label className="text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block">
            Your Email
          </label>
          <input
            type="email"
            className="border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white"
          ></input>
        </div>
        <div className="fieldbtn mt-0 md:mt-[1.875rem] w-full col-span-2">
          <button
            className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent2 hover:text-white text-center inline-block"
            type="submit"
          >
            Contact Me
          </button>
        </div>
      </form>
      {/* Contact Form Wrap */}
    </div>
  );
};

export default ContactForm;
