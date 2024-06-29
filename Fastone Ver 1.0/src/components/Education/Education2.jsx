import { SectionTitle3 } from "../SectionTitles";
import SectionBg from "../../assets/images/secBg7.jpg";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import { education } from "../../data/education";

const Education2 = (props) => {
  return (
    <section className="eduWrap pb-[4.5rem] sm:pb-[5.5rem] md:pb-[7rem] lg:pb-[13.125rem] pt-[8rem] sm:pt-[18rem] md:pt-[15rem] lg:pt-[25rem] xl:pt-[27rem] relative w-full">
      <div
        className="fixedBg bg-center bg-cover bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-[.97] before:bg-gray bg-gray bg-blend-multiply overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container mx-auto">
        <SectionTitle3
          title="My Learning &"
          titleInner="Education"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitle3>
        <div className="eduInner relative w-full">
          <div className="grid gap-[1.875rem] md:grid-cols-1 lg:grid-cols-2 grid-cols-1">
            {education.map(
              (item, index) =>
                index < 4 && (
                  <div
                    className="eduBox flex items-center group rounded-[10px] sm:rounded-[1.25rem] md:[1.875rem] lg:rounded-[3.125rem] before:absolute before:inset-0 hover:before:bg-accent before:bg-white before:opacity-70 before:z-[1] bg-blend-multiply before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] bg-no-repeat bg-center bg-cover hover:bg-accent bg-white py-[1.875rem] sm:py-[2.2rem] md:py-[2.5rem] lg:py-[2.8125rem] px-[1.25rem] sm:px-[1.875rem] md:px-[2.5rem] lg:px-[3.125rem] relative my-[10px]"
                    style={{ backgroundImage: `url(${PatternImg2})` }}
                    key={index}
                  >
                    <span
                      className="group-hover:bg-white bg-accent absolute font-Poppins font-semibold group-hover:text-accent text-white text-[1rem] md:text-[1.25rem] rounded-[5px] md:rounded-[10px] z-[1] right-[1.25rem] sm:right-[1.875rem] md:right-[2.5rem] lg:right-[3.125rem] h-[calc(100%+1.25rem)] flex items-center justify-center bottom-[-10px] px-4"
                      style={{
                        textOrientation: 'mixed',
                        writingMode: 'vertical-rl',
                      }}
                    >
                      {item.eduDate}
                    </span>
                    <div className="eduBoxInfoInner relative z-[1] flex flex-col max-w-[80%] md:max-w-[80%] lg:max-w-[75%]">
                      <h3 className="group-hover:text-white text-accent2 text-[1.5rem] font-Poppins font-bold">
                        {item.eduTitle}
                      </h3>
                      <span className="group-hover:text-white text-accent font-NunitoSans font-semibold text-[1rem] md:text-[1.125rem] mt-1">
                        {item.eduIns}
                      </span>
                      <p className="group-hover:text-desc text-desc2 text-[1rem] md:text-[1.125rem] font-NunitoSans mt-2">
                        {item.eduDesc}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
          {/* Education nner */}
        </div>
      </div>
      {/* Education Wrap */}
    </section>
  );
};

export default Education2;
