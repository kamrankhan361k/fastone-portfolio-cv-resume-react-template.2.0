import Slider from "react-slick";
import { SectionTitleLight } from "../SectionTitles";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import SectionBg from "../../assets/images/secBg4.jpg";
import { testimonials } from "../../data/testimonials";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { ReactComponent as LeftQuoteSignIcon } from "../../lib/icons/LeftQuoteSign.svg";
import { ReactComponent as RightQuoteSignIcon } from "../../lib/icons/RightQuoteSign.svg";

import "slick-carousel/slick/slick.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FiChevronRight className="hover:bg-white hover:text-accent bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FiChevronLeft className="hover:bg-white hover:text-accent bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2" />
    </div>
  );
}

const Testimonials2 = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    vertical: false,
    // adaptiveHeight: true,
    centerPadding: "0",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="testiWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full">
      <div
        className="fixedBg bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg1 bg-blend-color-dodge overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitleLight
          title="Users"
          titleInner="Feedback"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitleLight>
        <div className="testiList flex justify-center relative w-full">
        <Slider className="max-w-full" {...settings}>
            {testimonials.map(
              (item, index) =>
                index < 4 && (
                  <div className="sliderItem text-center" key={index}>
                    <div
                      className="testiBox flex flex-col sm:flex-row gap-5 sm:gap-0 text-center sm:text-left relative items-center p-8 sm:py-[3.4375rem] sm:pr-[3.125rem] md:pr-[7.5rem] max-w-[48.125rem] mx-auto"
                      key={index}
                    >
                      <div
                        className="before:absolute before:inset-0 before:bg-white before:rounded-[10px] sm:before:rounded-[1.25rem] lg:before:rounded-[1.875rem] xl:before:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-white left-0 sm:left-[3.75rem] md:left-[5.3125rem]"
                        style={{ backgroundImage: `url(${PatternImg2})` }}
                      ></div>
                      <div
                        className="testiImg border-[5px] md:border-[10px] border-[#fff] rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] max-w-[12.8125rem]"
                        style={{ flex: "0 0 12.8125rem" }}
                      >
                        <img
                          className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.9rem] lg:rounded-[2.1rem]"
                          src={item.testiImg}
                          alt={item.testiTitle}
                        ></img>
                      </div>
                      <div
                        className="testiInfo text-center sm:text-left p-0 sm:pl-[2.1875rem]"
                        style={{ flex: "1 0 0" }}
                      >
                        <p className="text-desc2 relative text-[1rem] md:text-[1.25rem] leading-relaxed z-[1]">
                          <LeftQuoteSignIcon className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -left-3 -top-5 absolute"></LeftQuoteSignIcon>
                          {item.testiDesc}
                          <RightQuoteSignIcon className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -right-3 sm:-right-7 -bottom-2 absolute"></RightQuoteSignIcon>
                        </p>
                        <h3 className="text-accent2 text-[1.5rem] font-Poppins font-bold flex flex-col sm:flex-row gap-[.9375rem] items-center mt-5">
                          {item.testiTitle}
                          <span className="text-accent text-[1rem] md:text-[1.125rem] font-NunitoSans font-semibold">
                            {item.testiDesi}
                          </span>
                        </h3>
                        <img
                          className="mx-auto sm:mx-[initial] h-[1.375rem] mt-2"
                          src={item.testiRate}
                          alt="Rating"
                        ></img>
                      </div>
                    </div>
                  </div>
                )
            )}
          </Slider>
          {/* Testimonials List */}
        </div>
      </div>
      {/* Testimonials Wrap */}
    </section>
  );
};

export default Testimonials2;
