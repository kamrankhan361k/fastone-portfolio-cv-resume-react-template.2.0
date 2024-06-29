import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import FreelanceWorkMockup from "../../assets/images/resources/freelanceWorkMockup.png";

const FreelanceWorkWidget = () => {
  return (
    <div className="freelanceWork px-[2.5rem] pt-[4.375rem] rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] relative w-full overflow-hidden">
      <div
        className="before:absolute before:inset-0 before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
        style={{ backgroundImage: `url(${PatternImg2})` }}
      ></div>
      <div className="freelanceInfo w-full">
        <h5 className="text-white font-Poppins font-semibold text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.25rem]">
          I Am Available For
        </h5>
        <h2 className="text-white font-Poppins font-bold text-[1.75rem] sm:text-[2.3rem] md:text-[2.3rem] lg:text-[2.875rem] leading-tight mt-2">
          Freelance Work
        </h2>
        <p className="text-desc sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.25rem] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <Link
          className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-5 md:py-[1.125rem] py-[14px] hover:bg-accent2 hover:text-white text-center inline-block mt-6 sm:mt-8 md:mt-10 lg:mt-10"
          to="/contact"
          title="Contact Me"
        >
          Contact Me
        </Link>
        {/* Freelance Info */}
      </div>
      <div className="freelanceImg min-w-[calc(100%+3rem)] -ml-6 -mb-16 mt-[2.8125rem]">
        <img
          className="w-full"
          src={FreelanceWorkMockup}
          alt="Freelance Work Mockup"
        ></img>
        {/* Freelance Image */}
      </div>
      {/* Freelance Work Widget */}
    </div>
  );
};

export default FreelanceWorkWidget;
