import { ReactComponent as FacebookIcon } from "../lib/icons/Facebook.svg";
import { ReactComponent as TumblrIcon } from "../lib/icons/Tumblr.svg";
import { ReactComponent as TwitterIcon } from "../lib/icons/Twitter.svg";

export const social2 = [
  {
    socialIcon: (
      <FacebookIcon className="h-5 w-5 lg:h-8 lg:w-8 fill-accent2 hover:fill-accent"></FacebookIcon>
    ),
    socialLink: "https://www.facebook.com/",
    socialTitle: "Facebook",
  },
  {
    socialIcon: (
      <TumblrIcon className="h-5 w-5 lg:h-8 lg:w-8 fill-accent2 hover:fill-accent"></TumblrIcon>
    ),
    socialLink: "#",
    socialTitle: "Tumblr",
  },
  {
    socialIcon: (
      <TwitterIcon className="h-5 w-5 lg:h-8 lg:w-8 fill-accent2 hover:fill-accent"></TwitterIcon>
    ),
    socialLink: "https://twitter.com/",
    socialTitle: "Twitter",
  },
];
