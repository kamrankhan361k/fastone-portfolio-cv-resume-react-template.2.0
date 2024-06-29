const SectionTitleSimple = (props) => {
  return (
    <div className="secTitleSimpleWrap gap-3 flex justify-center w-full mb-[1.875rem]">
      <h3 className="text-accent2 font-Poppins font-semibold text-[1.375rem]">
        {props.title}
      </h3>
      {/* Section Title Simple Wrap */}
    </div>
  );
};

export default SectionTitleSimple;
