import { SectionTitle3 } from "../SectionTitles";
import SectionBg from "../../assets/images/secBg3.jpg";
import { Skills } from "../Skills";
import { Education } from "../Education";

const EducationAndSkills = () => {
  return (
    <section className="eduAndWorkWrap py-[5rem] sm:py-[6rem] md:py-[7.5rem] relative w-full">
      <span className="bg-accent absolute left-0 bottom-[-.75rem] h-6 w-1/2"></span>
      <div
        className="fixedBg bg-center bg-cover bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-95 before:bg-gray bg-gray bg-blend-multiply xl:rounded-br-[20rem] lg:rounded-br-[18rem] md:rounded-br-[15rem] sm:rounded-br-[10rem] rounded-br-0 overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container mx-auto">
        <SectionTitle3
          title="Education &"
          titleInner="Skills"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitle3>
        <div className="eduAndWorkInner relative w-full">
          <div className="grid lg:gap-[1.875rem] gap-[3.125rem] md:grid-cols-1 lg:grid-cols-2 grid-cols-1">
            <div className="gridItem">
              <Education></Education>
            </div>
            <div className="gridItem">
              <Skills></Skills>
            </div>
          </div>
          {/* Education And Work Inner */}
        </div>
      </div>
      {/* Education And Work Wrap */}
    </section>
  );
};

export default EducationAndSkills;
