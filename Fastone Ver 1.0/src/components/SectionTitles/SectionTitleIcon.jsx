import { ReactComponent as EducationIcon } from "../../lib/icons/Mortarboard.svg";

const SectionTitleIcon = (props) => {
  return (
    <div className="secTitleIconWrap gap-3 flex items-center w-full mb-[1.875rem]">
      <EducationIcon className="fill-accent w-[2.5rem] md:w-[3.75rem]"></EducationIcon>
      <h3 className='text-accent2 font-Poppins font-bold text-[1.75rem]'>{props.title}</h3>
      {/* Section Title Icon Wrap */}
    </div>
  )
}

export default SectionTitleIcon
