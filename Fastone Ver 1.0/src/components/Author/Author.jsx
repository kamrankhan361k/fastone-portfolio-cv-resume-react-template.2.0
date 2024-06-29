import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import AuthorImg from "../../assets/images/resources/authorImg.jpg";

const Author = () => {
  return (
    <div className="authorBox items-center p-10 sm:pt-11 sm:pb-10 mt-10 sm:pr-20 sm:pl-0 flex flex-col md:flex-row justify-center md:justify-start text-center md:text-left gap-[1.875rem] relative w-full">
      <div
        className="before:absolute before:inset-0 before:bg-dark before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-60 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 md:left-[3.75rem] sm:left-10 left-0 bg-no-repeat bg-center bg-cover z-[-1] bg-dark"
        style={{ backgroundImage: `url(${PatternImg2})` }}
      ></div>
      <div className="authorImg rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] max-w-[7.8125rem] w-full overflow-hidden">
        <img className="w-full" src={AuthorImg} alt="Author Mockup"></img>
      </div>
      <div className="authorInfo flex flex-col gap-4 sm:gap-2">
        <h4 className="text-white font-bold font-Poppins text-[1.5rem]">
          About Admin
        </h4>
        <p className="font-NunitoSans text-desc text-[1rem] md:text-[1.0625rem] leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-[2px] sm:absolute static justify-center top-0 right-10">
            <Link className="text-white bg-facebook flex justify-center items-center rounded-b-lg w-[3.4375rem] h-[2.8125rem] hover:bg-white hover:text-facebook" to="https://www.facebook.com/" title="" target="_blank"><FaFacebookF size={17}></FaFacebookF></Link>
            <Link className="text-white bg-youtube flex justify-center items-center rounded-b-lg w-[3.4375rem] h-[2.8125rem] hover:bg-white hover:text-youtube" to="https://www.youtube.com/" title="" target="_blank"><FaYoutube size={17}></FaYoutube></Link>
            <Link className="text-white bg-twitter flex justify-center items-center rounded-b-lg w-[3.4375rem] h-[2.8125rem] hover:bg-white hover:text-twitter" to="https://twitter.com/" title="" target="_blank"><FaTwitter size={17}></FaTwitter></Link>
        </div>
      </div>
      {/* Author Box */}
    </div>
  );
};

export default Author;
