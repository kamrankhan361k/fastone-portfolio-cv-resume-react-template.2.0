import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";

const cateList = [
  {
    cateItem: "UX Strategy",
    cateLink: "#",
  },
  {
    cateItem: "Information Architecture",
    cateLink: "#",
  },
  {
    cateItem: "Prototyping",
    cateLink: "#",
  },
  {
    cateItem: "Wireframing",
    cateLink: "#",
  },
  {
    cateItem: "UI Design",
    cateLink: "#",
  },
  {
    cateItem: "Figma Design",
    cateLink: "#",
  },
  {
    cateItem: "XD Design",
    cateLink: "#",
  },
];

const CategoriesWidget = () => {
  return (
    <div className="widgetBox relative w-full">
      <div className="relative px-6 md:px-10 pt-10 md:pt-[3.4375rem] pb-10 md:pb-[4.375rem]">
        <div
          className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
          style={{ backgroundImage: `url(${PatternImg2})` }}
        ></div>
        <h3 className="text-[1.325rem] md:text-[1.5rem] text-accent2 uppercase font-Poppins font-bold">
          Categories
        </h3>
        <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-3 mb-8"></i>
        <ul className="flex flex-col gap-5 w-full">
          {cateList.map(
            (item, index) =>
              index < 7 && (
                <li
                  className="font-NunitoSans text-[1rem] md:text-[1.0625rem] font-semibold"
                  key={index}
                >
                  <Link
                    className="block relative font-NunitoSans text-[1rem] md:text-[1.0625rem] font-semibold pl-[1.25rem] md:pl-[1.4375rem] hover:text-accent"
                    to={item.cateLink}
                    title={item.cateItem}
                    target="_blank"
                  ><FaCaretRight className="absolute left-0 top-[2px] fill-accent"></FaCaretRight>
                    {item.cateItem}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
      {/* Widget Box */}
    </div>
  );
};

export default CategoriesWidget;
