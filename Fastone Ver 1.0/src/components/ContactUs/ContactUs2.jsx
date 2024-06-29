import SectionBg from "../../assets/images/secBg11.jpg";
import { ContactForm2 } from "../ContactForm";
import { ContactInfo2 } from "../ContactInfo";
import { SocialLinks3 } from "../SocialLinks";

const ContactUs = () => {
  return (
    <section className="contactUsWrap pb-14 sm:pb-15 md:pb-20 relative w-full">
      <div
        className="absolute z-[-2] inset-0 top-[11.25rem] bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg1 bg-blend-color-dodge overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
        <div className="contactUs grid gap-[4.375rem] lg:grid-cols-1 md:grid-cols-1 grid-cols-1 relative w-full">
          <div>
            <ContactForm2></ContactForm2>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1.875rem] md:gap-[2rem] lg:gap-[3.125rem]">
            <ContactInfo2></ContactInfo2>
            <SocialLinks3></SocialLinks3>
          </div>
          {/* Contact Us */}
        </div>
      </div>
      {/* Contact Us Wrap */}
    </section>
  );
};

export default ContactUs;
