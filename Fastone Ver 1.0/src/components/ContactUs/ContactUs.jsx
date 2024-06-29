import { SectionTitleLight2 } from "../SectionTitles";
import SectionBg from "../../assets/images/secBg5.jpg";
import { ContactForm } from "../ContactForm";
import { ContactInfo } from "../ContactInfo";
import { SocialLinks } from "../SocialLinks";

const ContactUs = () => {
  return (
    <section className="contactUsWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full">
      <div
        className="fixedBg bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-accent bg-accent bg-blend-multiply overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitleLight2
          title="Contact"
          titleInner="Me"
          desc="Your email address will not be published. Required fields are marked *"
        ></SectionTitleLight2>
        <div className="contactUs grid gap-[1.875rem] lg:grid-cols-2 md:grid-cols-1 grid-cols-1 relative w-full">
          <div>
            <ContactForm></ContactForm>
          </div>
          <div className="flex flex-col gap-[1.875rem] md:gap-[2.5rem] lg:gap-[3.4375rem]">
            <ContactInfo></ContactInfo>
            <SocialLinks></SocialLinks>
          </div>
          {/* Contact Us */}
        </div>
      </div>
      {/* Contact Us Wrap */}
    </section>
  );
};

export default ContactUs;
