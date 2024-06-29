const SectionTitleLightCenter2 = (props) => {
  return (
    <div className="secTitleWrap flex text-center justify-center w-full mb-[2.1875rem]">
      <div className="secTitle w-full">
        <h2 className="text-white text-[1.875rem] md:text-[3.125rem] font-Poppins font-bold relative">
          {props.title} <span className="text-white text-[1.875rem] md:text-[3.125rem] font-Caveat font-bold relative">
            {props.titleInner}
          </span>
        </h2>
        <p className="text-desc text-[1rem] md:text-[1.25rem] sm:text-[1.225rem] mt-1">
          {props.desc}
        </p>
        {/* Section Title */}
      </div>
      {/* Section Title Wrap */}
    </div>
  );
};

export default SectionTitleLightCenter2;
