import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SectionTitleLight } from "../SectionTitles";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import SectionBg from "../../assets/images/secBg2.jpg";
import { workExp } from "../../data/workExp";

import "swiper/css";
import "swiper/css/pagination";

const MyWorkExperience = () => {
  return (
    <section className="workExpWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem relative w-full">
      <span className="bg-accent absolute right-0 bottom-[-.75rem] h-6 w-1/2"></span>
      <div
        className="fixedBg bg-center bg-cover bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg1 bg-blend-color-dodge xl:rounded-tl-[20rem] lg:rounded-tl-[18rem] md:rounded-tl-[15rem] sm:rounded-tl-[10rem] rounded-tl-0 overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[86.875rem] mx-auto">
        <SectionTitleLight
          title="My Work"
          titleInner="Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitleLight>
        <div className="sliderWrap w-full max-w-full relative lg:mt-0 2xl:-mt-24">
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              315: {
                slidesPerView: 1,
                direction: "horizontal",
                centeredSlides: false,
              },
              766: {
                slidesPerView: 2,
                direction: "horizontal",
                centeredSlides: false,
                spaceBetween: 30
              },
              1210: {
                slidesPerView: 2,
                direction: "horizontal",
                centeredSlides: false,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 3,
                direction: "vertical",
                centeredSlides: true,
              },
            }}
            className="mySwiper"
          >
            {workExp.map((item, i) => {
              return (
                <SwiperSlide className="slideItem w-full" key={i}>
                  <div className="expBox lg:p-0 xl:px-[6.875rem] relative w-full">
                    <div
                      className="expBoxBg before:absolute before:inset-0 before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 top-full bottom-full bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
                      style={{ backgroundImage: `url(${PatternImg2})` }}
                    ></div>
                    <div className="grid gap-[1.875rem] xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 items-center">
                      <div className="gridItem xl:order-1">
                        <div className="expImg relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] max-h-[14rem] opacity-0">
                          <img
                            className="w-full"
                            src={item.expImg}
                            alt=""
                          ></img>
                          {/* Work Experience Image */}
                        </div>
                      </div>
                      <div className="gridItem">
                        <div className="expCap relative w-full pl-0 xl:pl-[7.5rem]">
                          <i className="text-white before:bg-dark3 before:rotate-[45deg] before:rounded-[.9375rem] before:inset-0 before:absolute before:z-[-1] font-Poppins font-extrabold text-[1.875rem] md:text-[2.75rem] lg:text-[3.75rem] not-italic h-[3.125rem] w-[3.125rem] md:h-[5rem] md:w-[5rem] lg:h-[7.5rem] lg:w-[7.5rem] inline-flex justify-center items-center absolute left-0 top-5 z-[-1]">
                            {item.expCount}
                          </i>
                          <span className="font-Poppins font-light text-desc text-[1rem] md:text-[1.125rem]">
                            {item.expDate}
                          </span>
                          <h2 className="font-Poppins font-bold text-white text-[1.75rem] lg:text-[1.875rem] xl:text-[2.25rem] mt-[5px]">
                            {item.expTitle}
                          </h2>
                          <h4 className="font-NunitoSans font-semibold text-accent text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] mt-2">
                            {item.expSubTitle}
                          </h4>
                          <p className="font-NunitoSans font-normal text-desc text-[1rem] md:text-[1.125rem] max-w-full md:max-w-[95%] mt-4">
                            {item.expDesc}
                          </p>
                          {/* Work Experience Cap */}
                        </div>
                      </div>
                    </div>
                    {/* Work Experience Box */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {/* Work Experience Wrap */}
    </section>
  );
};

export default MyWorkExperience;
