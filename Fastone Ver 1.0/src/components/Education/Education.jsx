import { BsPlus } from "react-icons/bs";
import { education } from "../../data/education";
import { SectionTitleIcon } from "../SectionTitles";

const Education = (props) => {
  return (
    <div className="eduWrap relative w-full">
      <SectionTitleIcon title="Education"></SectionTitleIcon>
      <div className="eduList relative flex flex-col gap-[10px] w-full">
        {education.map(
          (item, index) =>
            index < 3 && (
              <div
                className="eduBox bg-white relative rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] gap-5 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left p-5 md:p-10 w-full"
                key={index}
              >
                <div className="eduBoxInfo flex flex-col md:flex-row items-center gap-5">
                  <span className="bg-gray rounded-[10px] h-[3.125rem] w-[3.125rem] inline-flex items-center justify-center">
                    <BsPlus className="fill-accent" size="2.3rem"></BsPlus>
                  </span>
                  <div className="eduBoxInfoInner flex flex-col">
                    <h3 className="text-accent2 text-[1.375rem] font-Poppins font-bold">
                      {item.eduTitle}
                    </h3>
                    <span className="text-accent font-NunitoSans font-semibold text-[1rem] md:text-[1.0625rem]">
                      {item.eduIns}
                    </span>
                  </div>
                </div>
                <span className="eduDate gradBg2 relative rounded-[10px] text-white font-Poppins font-medium text-[1rem] bg-accent overflow-hidden px-5 py-[7px] z-[1] before:opacity-30">
                  {item.eduDate}
                </span>
                {/* Education Box */}
              </div>
            )
        )}
        {/* Education List */}
      </div>
      {/* Education Wrap */}
    </div>
  );
};

export default Education;
