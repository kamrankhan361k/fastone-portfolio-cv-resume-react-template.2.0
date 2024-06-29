import { MyWorkExperience2 } from "../MyWorkExperience";
import { Skills2 } from "../Skills";

const MyExperienceAndSkills = () => {
  return (
    <section className="expSkillWrap grid xl:grid-cols-2 grid-cols-1 relative w-full">
      <MyWorkExperience2></MyWorkExperience2>
      <Skills2></Skills2>
    </section>
  );
};

export default MyExperienceAndSkills;
