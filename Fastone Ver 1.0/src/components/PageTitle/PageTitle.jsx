import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import SectionBg from "../../assets/images/secBg12.jpg";

const PageTitle = (props) => {
  return (
    <section className="pageTitleWrap py-[4.5rem] sm:py-[4.5rem] md:py-[4.5rem] lg:pt-[7.5rem] lg:pb-0 relative w-full">
      <div
        className="before:absolute before:inset-0 before:bg-gray before:opacity-90 before:z-[1] bg-blend-multiply absolute inset-0 bottom-0 sm:bottom-[5.5rem] md:bottom-[7rem] lg:bottom-[8.125rem] bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
        style={{ backgroundImage: `url(${PatternImg2})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[110.3125rem] mx-auto">
        <div className="pageTitleBox px-5 lg:px-10 xl:px-0 py-10 lg:py-16 xl:py-20 relative lg:min-h-[20rem] xl:min-h-[26.5625rem] flex items-center z-[1] w-full">
          <div
            className="fixedBg bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg3 bg-blend-color-dodge rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] lg:rounded-[2.5rem] xl:rounded-[3.125rem] overflow-hidden"
            style={{ backgroundImage: `url(${SectionBg})` }}
          ></div>
          <div className="flex items-center flex-col md:flex-row justify-center gap-8 md:justify-between relative max-w-[73.125rem] mx-auto w-full">
            <div className="flex flex-col text-center md:text-left gap-[10px]">
              <h1 className="text-white font-Poppins font-bold text-[2rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem]">
                {props.title}
              </h1>
              <div className="flex items-center gap-[10px]">
                <span className="w-[2.5rem] sm:w-[3rem] md:w-[4.375rem] bg-accent h-[1px]"></span>
                <ul className="flex items-center divide-x divide-white">
                  <li className="text-white font-NunitoSans font-bold text-[1rem] md:text-[1.125rem] leading-none pr-4">
                    <Link
                      className="flex items-center gap-2 hover:text-accent"
                      to={props.homeURL}
                      title={props.hometitle}
                    >
                      <FaHome size={22}></FaHome>
                      {props.hometitle}
                    </Link>
                  </li>
                  <li className="text-accent font-NunitoSans font-bold text-[1rem] md:text-[1.125rem] leading-none pl-4">
                    {props.currentPage}
                  </li>
                </ul>
              </div>
            </div>
            <div className="btnBox">
              <Link
                className="bg-accent text-white text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-white hover:text-accent text-center inline-block"
                to="/"
                title="Hire Me Now"
              >
                Hire Me Now
              </Link>
            </div>
          </div>
          {/* Page Title Box */}
        </div>
      </div>
      {/* Page Title Wrap */}
    </section>
  );
};

export default PageTitle;
