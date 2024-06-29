const SectionTitleSimple2 = (props) => {
  return (
    <div className="secTitleSimpleWrap gap-3 flex text-center justify-center w-full mb-[1.875rem]">
      <h3 className="text-accent2 font-Poppins font-semibold text-[1.75rem] md:text-[2.25rem] max-w-full md:max-w-[80%] leading-[1.3]">
        {props.title}{" "}
        <span className="text-accent text-[1.875rem] md:text-[3.125rem] font-Caveat font-bold relative">
          {props.titleInner}
        </span>{" "}
        {props.title2}{" "}
        <span className="text-accent text-[1.65rem] md:text-[2.875rem] font-Caveat font-bold relative">
          {props.titleInner2}
        </span>{" "}
        {props.title3}
      </h3>
      {/* Section Title Simple Wrap */}
    </div>
  );
};

export default SectionTitleSimple2;
