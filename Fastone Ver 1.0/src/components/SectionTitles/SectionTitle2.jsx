const SectionTitle2 = (props) => {
  return (
    <div className="secTitleWrap flex justify-center text-center w-full mb-[2.1875rem]">
      <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
        <i className="text-accent font-Poppins font-semibold uppercase text-[1rem] md:text-[1.25rem] tracking-[2.5px] md:tracking-[5.5px] mb-3 not-italic">{props.subTitle}</i>
        <h2 className="text-accent2 text-[1.875rem] md:text-[2.5rem] xl:text-[3.125rem] font-Poppins font-bold relative">
          {props.title} <span className="text-accent2 text-[1.875rem] md:text-[2.5rem] xl:text-[3.125rem] font-Caveat font-bold relative">
            {props.titleInner}
          </span>
        </h2>
        <p className="text-desc2 text-[1rem] md:text-[1.25rem] sm:text-[1.225rem] mt-1">
          {props.desc}
        </p>
        {/* Section Title */}
      </div>
      {/* Section Title Wrap */}
    </div>
  );
};

export default SectionTitle2;
