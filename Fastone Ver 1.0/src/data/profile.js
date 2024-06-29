import { ReactComponent as DribbbleIcon } from "../lib/icons/Dribbble.svg";
import { ReactComponent as BehanceIcon } from "../lib/icons/Behance.svg";
import { ReactComponent as SkypeIcon } from "../lib/icons/Skype.svg";

export const profile = [
  {
    bgColor: "profBox group bg-white flex justify-center items-center text-center relative w-full before:h-2 before:absolute before:inset-x-0 before:top-0 before:bg-[#d74579] h-[23.125rem] before:z-[-1] hover:before:h-full z-[1]",
    titleColor: "text-[#d74579]",
    profIcon: <DribbbleIcon className="h-[4.25rem] w-[4.25rem] group-hover:brightness-[10]"></DribbbleIcon>,
    profSubTitle: "My Portfolio",
    profTitle: "Dribbble",
    profLinkCap: "Check Now",
    profLink: "#",
  },
  {
    bgColor: "profBox group bg-white flex justify-center items-center text-center relative w-full before:h-2 before:absolute before:inset-x-0 before:top-0 before:bg-[#4176fa] h-[23.125rem] before:z-[-1] hover:before:h-full z-[1]",
    titleColor: "text-[#4176fa]",
    profIcon: <BehanceIcon className="h-[4.25rem] w-[4.25rem] group-hover:contrast-[4]"></BehanceIcon>,
    profSubTitle: "My Portfolio",
    profTitle: "Behance",
    profLinkCap: "Check Now",
    profLink: "#",
  },
  {
    bgColor: "profBox group bg-white flex justify-center items-center text-center relative w-full before:h-2 before:absolute before:inset-x-0 before:top-0 before:bg-[#00a9f0] h-[23.125rem] before:z-[-1] hover:before:h-full z-[1]",
    titleColor: "text-[#00a9f0]",
    profIcon: <SkypeIcon className="h-[4.25rem] w-[4.25rem] group-hover:contrast-200"></SkypeIcon>,
    profSubTitle: "Contact Me",
    profTitle: "Skype",
    profLinkCap: "Get In Touch",
    profLink: "#",
  },
];
