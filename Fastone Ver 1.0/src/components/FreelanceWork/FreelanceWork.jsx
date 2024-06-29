import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import FreelanceWorkMockup from "../../assets/images/resources/freelanceWorkMockup.png";

const FreelanceWork = () => {
  return (
    <section className="freelanceWorkWrap w-full relative z-[1]">
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <div className="freelanceWork p-[1.875rem] sm:p-[2.5rem] md:pt-[4.0625rem] md:pb-[3.4375rem] md:pl-[3.75rem] xl:pl-[10.625rem] relative w-full">
          <div
            className="before:absolute before:inset-0 before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-l-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-l-[3.125rem] inset-0 w-full md:w-screen bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
            style={{ backgroundImage: `url(${PatternImg2})` }}
          ></div>
          <div className="grid gap-[1.875rem] md:grid-cols-2 grid-cols-1 text-center md:text-left items-center">
            <div className="md:order-1">
              <div className="freelanceImg w-full">
                <img src={FreelanceWorkMockup} alt="Freelance Work Mockup"></img>
                {/* Freelance Image */}
              </div>
            </div>
            <div>
              <div className="freelanceInfo w-full">
                <h5 className="text-white font-Poppins font-semibold text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.25rem]">I Am Available For</h5>
                <h2 className="text-white font-Poppins font-bold text-[1.75rem] sm:text-[2.3rem] md:text-[2.3rem] lg:text-[3.125rem]">Freelance Work</h2>
                <p className="text-desc sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.25rem] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <Link
                    className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-5 md:py-[1.125rem] py-[14px] hover:bg-accent2 hover:text-white text-center inline-block mt-6 sm:mt-8 md:mt-10 lg:mt-10"
                    to="/"
                    title="Download CV"
                  >
                    Download CV
                  </Link>
                {/* Freelance Info */}
              </div>
            </div>
          </div>
          {/* Freelance Work */}
        </div>
      </div>
      {/* Freelance Work Wrap */}
    </section>
  );
};

export default FreelanceWork;
