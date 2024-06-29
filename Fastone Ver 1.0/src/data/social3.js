import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const social3 = [
  {
    socialClass:
      "h-[2.8125rem] w-[2.8125rem] inline-flex items-center justify-center rounded-full bg-gray z-[1] before:absolute before:rounded-full before:inset-0 before:scale-50 hover:before:scale-100 before:opacity-0 before:z-[-1] hover:before:bg-[#1877F2] hover:before:opacity-100 group relative",
    socialIcon: (
      <FaFacebookF
        className="fill-accent2 group-hover:fill-white"
        size={16}
      ></FaFacebookF>
    ),
    socialLink: "https://www.facebook.com/",
    socialTitle: "Facebook",
  },
  {
    socialClass:
      "h-[2.8125rem] w-[2.8125rem] inline-flex items-center justify-center rounded-full bg-gray z-[1] before:absolute before:rounded-full before:inset-0 before:scale-50 hover:before:scale-100 before:opacity-0 before:z-[-1] hover:before:bg-[#1DA1F2] hover:before:opacity-100 group relative",
    socialIcon: <FaTwitter className="fill-accent2 group-hover:fill-white" size={16}></FaTwitter>,
    socialLink: "https://twitter.com/",
    socialTitle: "Twitter",
  },
  {
    socialClass:
      "h-[2.8125rem] w-[2.8125rem] inline-flex items-center justify-center rounded-full bg-gray z-[1] before:absolute before:rounded-full before:inset-0 before:scale-50 hover:before:scale-100 before:opacity-0 before:z-[-1] hover:before:bg-[#CD201F] hover:before:opacity-100 group relative",
    socialIcon: <FaYoutube className="fill-accent2 group-hover:fill-white" size={16}></FaYoutube>,
    socialLink: "https://youtube.com/",
    socialTitle: "Youtube",
  },
  {
    socialClass:
      "h-[2.8125rem] w-[2.8125rem] inline-flex items-center justify-center rounded-full bg-gray z-[1] before:absolute before:rounded-full before:inset-0 before:scale-50 hover:before:scale-100 before:opacity-0 before:z-[-1] hover:before:bg-[#0A66C2] hover:before:opacity-100 group relative",
    socialIcon: (
      <FaLinkedinIn className="fill-accent2 group-hover:fill-white" size={16}></FaLinkedinIn>
    ),
    socialLink: "https://linkedin.com/",
    socialTitle: "Linkedin",
  },
];
