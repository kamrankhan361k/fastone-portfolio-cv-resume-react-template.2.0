import { skills } from "../../data/skills";
import { SectionTitleLightFull } from "../SectionTitles";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import SectionBg from "../../assets/images/secBg9.jpg";

const Skills2 = () => {
  return (
    <section className="skillsWrap px-0 py-[4.5rem] sm:px-8 sm:py-[5.5rem] md:py-[6.5rem] lg:p-[7.5rem] lg:-mb-[6.25rem] flex justify-center items-center relative w-full">
      <div
        className="bg-center bg-no-repeat bg-cover before:absolute before:inset-0 before:opacity-95 before:bg-accent bg-accent bg-blend-screen lg:rounded-l-[3.125rem] md:rounded-l-8 sm:rounded-l-5 rounded-l-0 overflow-hidden absolute w-[90.3125rem] right-0 top-0 bottom-0"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[44.6875rem] mx-auto">
        <SectionTitleLightFull
          title="My Skill &"
          titleInner="Advantage"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitleLightFull>
        <div className="skillsList grid gap-[1.875rem] grid-cols-1 sm:grid-cols-2 relative w-full">
          {skills.map(
            (item, index) =>
              index < 4 && (
                <div
                  className="rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] border-[5px] md:border-[10px] border-gray border-solid p-6 sm:pt-[2.1875rem] sm:pb-8 sm:px-10 relative before:absolute before:inset-0 before:bg-white before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[-11] bg-blend-multiply bg-no-repeat bg-center bg-cover bg-white z-[1]"
                  key={index}
                  style={{ backgroundImage: `url(${PatternImg2})` }}
                >
                  <span className="bg-white rounded-[10px] sm:rounded-[1.25rem] h-[4.375rem] w-[4.375rem] inline-flex items-center border-[3px] border-[#f2eafa] border-solid justify-center">
                    {item.skillIcon}
                  </span>
                  <div className="skillInfo flex flex-col w-full mt-3 gap-[8px] pb-6">
                    <h3 className="text-accent2 text-[1.375rem] font-Poppins font-bold">
                      {item.skillTitle}
                    </h3>
                    <p className="text-[1rem] md:text-[1.125rem] font-normal font-NunitoSans text-desc2">
                      {item.skillDesc}
                    </p>
                  </div>
                  <div className="w-full bg-[#ede5f6] h-[7px] my-3 rounded-[2px]">
                    <div
                      className="bg-accent h-[7px] rounded-[2px] relative"
                      style={{ width: `${item.skillPercent}` }}
                    >
                      <span className="text-white bg-accent absolute rounded-[10px] font-Poppins font-medium text-[14px] py-[4px] px-[.9375rem] top-0 mt-[-13px] right-0 translate-x-2/4">
                        {item.skillPercent}
                      </span>
                    </div>
                  </div>
                  {/* Skill Box */}
                </div>
              )
          )}
          {/* Skills List */}
        </div>
        {/* Skills Wrap */}
      </div>
    </section>
  );
};

export default Skills2;
