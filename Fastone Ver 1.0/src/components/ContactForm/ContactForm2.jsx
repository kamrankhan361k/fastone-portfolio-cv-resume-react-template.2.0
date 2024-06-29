import SectionBg from "../../assets/images/secBg5.jpg";
import { SectionTitleLightCenter2 } from "../SectionTitles";

const ContactForm2 = () => {
  return (
    <div className="contactFormWrap py-12 md:py-16 xl:pt-[5.625rem] xl:pb-[6.5625rem] px-[1.875rem] sm:px-[2.5rem] md:px-[5rem] lg:px-[9.375rem] relative w-full">
      <div
        className="fixedBg bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-[.85] before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] bg-accent bg-blend-multiply overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <SectionTitleLightCenter2
        title="Contact"
        titleInner="Me"
        desc="Your email address will not be published. Required fields are marked *"
      ></SectionTitleLightCenter2>
      <form className="grid gap-[1.875rem] lg:grid-cols-2 grid-cols-1">
        <div className="grid gap-[1.875rem] lg:grid-cols-1 grid-cols-1">
          <div className="fieldBox relative w-full">
            <label className="text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block">
              Your Name
            </label>
            <input
              type="text"
              className="border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white"
            ></input>
          </div>
          <div className="fieldBox relative w-full">
            <label className="text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block">
              Your Email
            </label>
            <input
              type="email"
              className="border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white"
            ></input>
          </div>
        </div>
        <div className="fieldBox relative w-full">
          <label className="text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block">
            Write a Message
          </label>
          <textarea className="border-2 border-solid border-[#a9a9a9] block focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[7.5rem] md:h-[12rem] p-[1.125rem] text-white"></textarea>
          <button
            className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-tl-[10px] md:rounded-tl-[1.25rem] rounded-br-[10px] md:rounded-br-[1.25rem] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent2 hover:text-white text-center inline-block absolute z-[1] right-0 bottom-0"
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

export default ContactForm2;
