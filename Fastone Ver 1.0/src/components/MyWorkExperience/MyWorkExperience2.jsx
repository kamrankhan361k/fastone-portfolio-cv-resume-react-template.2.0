import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsPlus } from "react-icons/bs";
import { SectionTitleLightFull } from "../SectionTitles";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import SectionBg from "../../assets/images/secBg8.jpg";
import { workExp } from "../../data/workExp";

import "swiper/css";
import "swiper/css/pagination";

const MyWorkExperience2 = () => {
  return (
    <section className="workExpWrap2 px-0 py-[4.5rem] sm:p-[5.5rem] md:py-[6.5rem] lg:p-[7.5rem] lg:-mt-[6.25rem] flex justify-center items-center relative w-full z-[1]">
      <div
        className="fixedBg bg-center bg-cover bg-no-repeat before:absolute before:inset-0 before:opacity-95 before:bg-dark bg-dark gradBg3 bg-blend-screen lg:rounded-r-[3.125rem] md:rounded-r-8 sm:rounded-r-5 rounded-r-0 overflow-hidden z-[1]"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[35.9375rem] mx-auto">
        <SectionTitleLightFull
          title="My Work"
          titleInner="Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitleLightFull>
        <div className="swiperWrap2 relative w-full sm:-mt-10">
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
                slidesPerView: 3,
                direction: "vertical",
                centeredSlides: true,
              },
              1210: {
                slidesPerView: 3,
                direction: "vertical",
                centeredSlides: true,
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
                <SwiperSlide className="slideItem" key={i}>
                  <div className="flex gap-5 justify-between items-center w-full">
                    <span className="bg-gray rounded-[10px] h-[3.125rem] w-[3.125rem] inline-flex items-center justify-center order-1">
                      <BsPlus className="fill-accent" size="2.3rem"></BsPlus>
                    </span>
                    <div className="expBox pl-5 relative max-w-[calc(100%-6.25rem)]">
                      <div
                        className="expBoxBg before:absolute before:inset-0 before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 top-full bottom-full bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
                        style={{ backgroundImage: `url(${PatternImg2})` }}
                      ></div>
                      <div className="expCap relative w-full pl-12 md:pl-[6.5rem]">
                        <i className="text-white before:bg-dark3 before:rotate-[45deg] before:rounded-[.9375rem] scale-75 before:inset-0 before:absolute before:z-[-1] font-Poppins font-extrabold text-[1.875rem] md:text-[2.75rem] lg:text-[3.75rem] not-italic h-[3.125rem] w-[3.125rem] md:h-[5rem] md:w-[5rem] lg:h-[7.5rem] lg:w-[7.5rem] inline-flex justify-center items-center absolute left-0 top-5 z-[-1]">
                          {item.expCount}
                        </i>
                        <span className="font-Poppins font-light text-desc text-[1rem] md:text-[1.125rem]">
                          {item.expDate}
                        </span>
                        <h2 className="font-Poppins font-bold text-white text-[1.75rem] md:text-[1.875rem] lg:text-[2rem] mt-[5px]">
                          {item.expTitle}
                        </h2>
                        <h4 className="font-NunitoSans font-semibold text-accent text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] mt-2">
                          {item.expSubTitle}
                        </h4>
                        <p className="font-NunitoSans font-normal text-desc text-[1rem] md:text-[1.125rem] max-w-full md:max-w-[95%] mt-4 h-0 opacity-0">
                          {item.expDesc}
                        </p>
                        {/* Work Experience Cap */}
                      </div>
                      {/* Work Experience Box */}
                    </div>
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

export default MyWorkExperience2;
