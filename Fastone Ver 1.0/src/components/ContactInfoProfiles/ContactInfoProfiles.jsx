import PatternImg2 from "../../assets/images/patternImg2.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import { profile } from "../../data/profile";

const ContactInfoProfiles = () => {
  return (
    <section className="contactInfoProfWrap relative w-100">
      <div
        className="before:absolute before:inset-0 before:bg-gray before:opacity-90 before:z-[1] bg-blend-multiply absolute inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
        style={{ backgroundImage: `url(${PatternImg2})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <div className="contactInfoProfList gap-[.9375rem] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative w-full">
          {profile.map(
            (item, index) =>
              index < 3 && (
                <div className={item.bgColor} key={index}>
                  <div className="profBoxInner p-5">
                    <span className="inline-block">{item.profIcon}</span>
                    <h5 className="text-[#183153] text-[1rem] md:text-[1.125rem] font-Poppins font-semibold uppercase mt-[1.875rem] group-hover:text-white">
                      {item.profSubTitle}
                    </h5>
                    <h2
                      className={`${item.titleColor} text-[1.5rem] sm:text-[1.875rem] md:text-[2.5rem] uppercase font-Poppins font-bold mt-[2px] group-hover:text-white`}
                    >
                      {item.profTitle}
                    </h2>
                    <a
                      className="uppercase font-NunitoSans font-bold text-[1rem] text-accent inline-flex items-center gap-3 group-hover:text-white"
                      href={item.profLink}
                      title={item.profTitle}
                    >
                      {item.profLinkCap}{" "}
                      <FaAngleDoubleRight></FaAngleDoubleRight>
                    </a>
                  </div>
                  {/* Profile Box */}
                </div>
              )
          )}
          {/* Contact Info Profiles List */}
        </div>
      </div>
      {/* Contact Info Profiles Wrap */}
    </section>
  );
};

export default ContactInfoProfiles;
