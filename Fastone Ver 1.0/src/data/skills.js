import { ReactComponent as JavaScriptIcon } from "../lib/icons/JavaScript.svg";
import { ReactComponent as HtmlIcon } from "../lib/icons/Html.svg";
import { ReactComponent as PhotoshopIcon } from "../lib/icons/Photoshop.svg";
import { ReactComponent as WordPressIcon } from "../lib/icons/WordPress.svg";

export const skills = [
  {
    skillBox: "pb-10 sm:pt-5 sm:pb-10 sm:pr-10 border-r-0 sm:border-r-[1px] border-b-[1px] border-[#9bb1cf]",
    skillIcon: <JavaScriptIcon className="h-10 w-10"></JavaScriptIcon>,
    skillTitle: "JavaScript",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "62%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pt-5 sm:pb-10 sm:pl-10 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <HtmlIcon className="h-10 w-10"></HtmlIcon>,
    skillTitle: "HTML/CSS3",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "94%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pr-10 border-r-0 sm:border-r-[1px] sm:border-b-0 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <PhotoshopIcon className="h-10 w-10"></PhotoshopIcon>,
    skillTitle: "Photoshop",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "72%",
  },
  {
    skillBox: "pt-10 sm:pb-5 sm:pt-10 sm:pl-10",
    skillIcon: <WordPressIcon className="h-10 w-10"></WordPressIcon>,
    skillTitle: "WordPress",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "80%",
  },
];
