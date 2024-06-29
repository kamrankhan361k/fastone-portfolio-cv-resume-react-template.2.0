import PatternImg2 from "../../assets/images/patternImg2.jpg";

const tagList = [
  {
    tagItem: "Fashion",
    tagLink: "#",
  },
  {
    tagItem: "Jobs",
    tagLink: "#",
  },
  {
    tagItem: "Hire",
    tagLink: "#",
  },
  {
    tagItem: "Corporate",
    tagLink: "#",
  },
  {
    tagItem: "E-commerce",
    tagLink: "#",
  },
  {
    tagItem: "Agency",
    tagLink: "#",
  },
  {
    tagItem: "Responsive",
    tagLink: "#",
  },
];

const TagsWidget = () => {
  return (
    <div className="widgetBox relative w-full">
      <div className="relative px-6 md:px-10 pt-10 md:pt-[3.4375rem] pb-10 md:pb-[4.375rem]">
        <div
          className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
          style={{ backgroundImage: `url(${PatternImg2})` }}
        ></div>
        <h3 className="text-[1.325rem] md:text-[1.5rem] text-accent2 uppercase font-Poppins font-bold">
          Tags
        </h3>
        <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-3 mb-8"></i>
        <div className="flex flex-wrap gap-[10px] w-full">
          {tagList.map(
            (item, index) =>
              index < 7 && (
                <a
                  key={index}
                  className="relative font-NunitoSans text-[.9375rem] font-semibold bg-white text-accent2 hover:bg-accent hover:text-white rounded-[5px] md:rounded-[10px] py-[10.25px] px-[1.325rem] md:px-[1.5625rem]"
                  href={item.tagLink}
                  title={item.tagItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.tagItem}
                </a>
              )
          )}
        </div>
      </div>
      {/* Widget Box */}
    </div>
  );
};

export default TagsWidget;
