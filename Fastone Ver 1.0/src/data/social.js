import { ReactComponent as FacebookIcon } from "../lib/icons/Facebook.svg";
import { ReactComponent as TumblrIcon } from "../lib/icons/Tumblr.svg";
import { ReactComponent as TwitterIcon } from "../lib/icons/Twitter.svg";

export const social = [
  {
    socialIcon: <FacebookIcon className="h-7 w-7 md:h-10 md:w-10 fill-white hover:fill-accent2"></FacebookIcon>,
    socialLink: "https://www.facebook.com/",
    socialTitle: "Facebook"
  },
  {
    socialIcon: <TumblrIcon className="h-7 w-7 md:h-10 md:w-10 fill-white hover:fill-accent2"></TumblrIcon>,
    socialLink: "#",
    socialTitle: "Tumblr"
  },
  {
    socialIcon: <TwitterIcon className="h-7 w-7 md:h-10 md:w-10 fill-white hover:fill-accent2"></TwitterIcon>,
    socialLink: "https://twitter.com/",
    socialTitle: "Twitter"
  },
];
