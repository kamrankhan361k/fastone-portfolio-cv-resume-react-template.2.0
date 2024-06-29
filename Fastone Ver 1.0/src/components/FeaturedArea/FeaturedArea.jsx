import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import FeatImg from "../../assets/images/resources/featMockup.jpg";
import Shape1 from "../../assets/images/shape-1.png";
import Shape2 from "../../assets/images/shape-2.png";
import Shape3 from "../../assets/images/shape-3.png";
import Shape4 from "../../assets/images/shape-4.png";

const FeaturedArea = () => {
  return (
    <section className="featuredAreaWrap md:text-left text-center bg-dark z-[1] flex items-center bgGrident1 bg-blend-hard-light relative min-h-screen xl:rounded-br-[20rem] lg:rounded-br-[18rem] md:rounded-br-[15rem] sm:rounded-br-[10rem] rounded-br-0 w-screen md:py-[6.25rem] py-20">
      <div className="shaps absolute inset-0">
        <img className="absolute floatAnim left-[10%] top-[10%] animDelay1" src={Shape1} alt="Shape"></img>
        <img className="absolute floatAnim right-[10%] bottom-[20%] animDelay2" src={Shape2} alt="Shape"></img>
        <img className="absolute floatAnim right-[50%] bottom-[50%] animDelay3" src={Shape2} alt="Shape"></img>
        <img className="absolute floatAnim right-[15%] bottom-[40%] animDelay4" src={Shape3} alt="Shape"></img>
        <img className="absolute floatAnim right-[10%] top-[10%] animDelay5" src={Shape3} alt="Shape"></img>
        <img className="absolute floatAnim right-[45%] top-[10%] animDelay6" src={Shape4} alt="Shape"></img>
        {/* Shaps */}
      </div>
      <span className="bg-accent absolute left-0 bottom-[-.75rem] h-6 w-1/2"></span>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <div className="featuredAreaInner relative z-[1] w-full">
          <div className="grid gap-[1.875rem] md:grid-cols-2 grid-cols-1 items-center">
            <div className="md:order-1">
              <div className="featuredImgWrap text-center w-full">
                <div className="featuredImgInner relative inline-block w-4/5 sm:w-full md:w-full lg:w-[26rem] xl:w-[35rem]">
                  <span className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-white rounded-full right-[-2.5rem] top-[-2.5rem] md:right-[-3.5rem] md:top-[-3.5rem] lg:right-[-4rem] lg:top-[-4rem] xl:right-[-6.25rem] xl:top-[-6.25rem] z-[1]"></span>
                  <span className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-dark2 rounded-full left-[-2.5rem] bottom-[-2.5rem] md:right-[-3.5rem] md:bottom-[-3.5rem] lg:left-[-4rem] lg:bottom-[-4rem] xl:left-[-6.25rem] xl:bottom-[-6.25rem] z-[1]"></span>
                  <div className="featuredImg relative rounded-full">
                    <img
                      className="rounded-full relative z-[1] max-w-full"
                      src={FeatImg}
                      alt=""
                    ></img>
                    {/* Featured Image */}
                  </div>
                  {/* Featured Image Inner */}
                </div>
                {/* Featured Image Wrap */}
              </div>
            </div>
            <div>
              <div className="featuredCap relative w-full mt-10 md:mt-0">
                <span className="bg-accent opacity-[.07] w-[6.25rem] h-[6.25rem] md:w-[12.5rem] md:h-[12.5rem] absolute rounded-full z-[-1] top-[-2.5rem] md:top-[-5rem]"></span>
                <h3 className="font-normal text-[1.5rem] sm:text-[1.5rem] md:text-[1.875rem] lg:text-[2rem] xl:text-[2.5rem] font-Caveat text-white uppercase leading-none">
                  Hello, I Am
                </h3>
                <h2 className="font-bold text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-Poppins text-white uppercase">
                  Alycia
                  <span className="font-normal text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-accent font-Poppins uppercase">
                    Carey
                  </span>
                </h2>
                <h5 className="md:justify-start justify-center font-bold text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] font-Poppins text-white uppercase flex items-center gap-2.5 tracking-[1px]">
                  <span className="w-[2.5rem] sm:w-[3rem] md:w-[4.375rem] bg-accent h-[1px]"></span>
                  UI/UX Designer
                </h5>
                <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.375rem] text-desc md:leading-9 sm:leading-7 leading-6 w-full md:w-full lg:w-full xl:w-3/4 mt-6">
                  We're an award-winning, forward thinking, boutique digital &
                  creative in Edmonton, Canada.
                </p>
                <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.375rem] text-desc md:leading-9 sm:leading-7 leading-6 w-full md:w-full lg:w-full xl:w-3/4 mt-4">
                  Our strategists, designers and coders work with clients from
                  all over the world to build successful,
                </p>
                <div className="flex items-center md:justify-start justify-center sm:gap-8 md:gap-10 lg:gap-15 xl:gap-20 gap-8 md:mt-[3.125rem] mt-[1.875rem]">
                  <Link
                    className="text-accent uppercase md:text-[1.125rem] text-[1rem] flex gap-5 items-center hover:text-white"
                    to="/"
                    title="Hire Me"
                  >
                    <FiChevronRight className="bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2"></FiChevronRight>
                    <span className="font-bold font-Poppins underline underline-offset-8">
                      Hire Me
                    </span>
                  </Link>
                  <Link
                    className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent hover:text-white text-center inline-block"
                    to="/"
                    title="Download CV"
                  >
                    Download CV
                  </Link>
                </div>
                {/* Featured Cap */}
              </div>
            </div>
          </div>
          {/* Featured Area Inner */}
        </div>
      </div>
      {/* Featured Area Wrap */}
    </section>
  );
};

export default FeaturedArea;
