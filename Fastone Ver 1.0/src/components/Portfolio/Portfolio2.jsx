import { Link } from "react-router-dom";
import { FiCircle } from "react-icons/fi";
import { SectionTitle } from "../SectionTitles";

import PortImg1 from "../../assets/images/resources/portImg2-1.jpg";
import PortImg2 from "../../assets/images/resources/portImg2-2.jpg";
import PortImg3 from "../../assets/images/resources/portImg2-3.jpg";
import PortImg4 from "../../assets/images/resources/portImg2-4.jpg";
import PortImg5 from "../../assets/images/resources/portImg2-5.jpg";
import PortImg6 from "../../assets/images/resources/portImg2-6.jpg";
import PortImg7 from "../../assets/images/resources/portImg2-7.jpg";
import Fancybox from "../../fancybox";

const Portfolio2 = () => {
  return (
    <section className="portWrap py-[5rem] sm:py-[6rem] md:py-[7.5rem] relative w-full">
      <div className="container sm:container md:container lg:container xl:container 2xl:max-w-[85.625rem] mx-auto">
        <SectionTitle
          title="My Amazing"
          titleInner="Works"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitle>
        <Fancybox>
          <div className="portList flex flex-wrap relative mx-[-.9375rem]">
            <div className="basis-full md:basis-[28.625%] px-[.9375rem] grid gap-[1.875rem]">
              <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                <img
                  className="w-full"
                  src={PortImg1}
                  alt="Portfolio Mockup"
                ></img>
                <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <a
                    className="inline-flex items-center justify-center"
                    href={PortImg1}
                    title="Portfolio Image" data-fancybox="gallery"
                  >
                    <FiCircle
                      className="stroke-[2] stroke-white"
                      size={32}
                    ></FiCircle>
                  </a>
                </div>
                {/* Portfolio Box */}
              </div>
              <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                <img
                  className="w-full"
                  src={PortImg4}
                  alt="Portfolio Mockup"
                ></img>
                <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <a
                    className="inline-flex items-center justify-center"
                    href={PortImg4}
                    title="Portfolio Image" data-fancybox="gallery"
                  >
                    <FiCircle
                      className="stroke-[2] stroke-white"
                      size={32}
                    ></FiCircle>
                  </a>
                </div>
                {/* Portfolio Box */}
              </div>
            </div>
            <div className="basis-full md:basis-[28.625%] px-[.9375rem] grid gap-[1.875rem] md:order-1 sm:order-1 order-0">
              <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                <img
                  className="w-full"
                  src={PortImg3}
                  alt="Portfolio Mockup"
                ></img>
                <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <a
                    className="inline-flex items-center justify-center"
                    href={PortImg3}
                    title="Portfolio Image" data-fancybox="gallery"
                  >
                    <FiCircle
                      className="stroke-[2] stroke-white"
                      size={32}
                    ></FiCircle>
                  </a>
                </div>
                {/* Portfolio Box */}
              </div>
              <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                <img
                  className="w-full"
                  src={PortImg5}
                  alt="Portfolio Mockup"
                ></img>
                <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <a
                    className="inline-flex items-center justify-center"
                    href={PortImg5}
                    title="Portfolio Image" data-fancybox="gallery"
                  >
                    <FiCircle
                      className="stroke-[2] stroke-white"
                      size={32}
                    ></FiCircle>
                  </a>
                </div>
                {/* Portfolio Box */}
              </div>
            </div>
            <div className="basis-full md:basis-[42.75%] px-[.9375rem] grid gap-[1.875rem]">
              <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                <img
                  className="w-full"
                  src={PortImg2}
                  alt="Portfolio Mockup"
                ></img>
                <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <a
                    className="inline-flex items-center justify-center"
                    href={PortImg2}
                    title="Portfolio Image" data-fancybox="gallery"
                  >
                    <FiCircle
                      className="stroke-[2] stroke-white"
                      size={32}
                    ></FiCircle>
                  </a>
                </div>
                {/* Portfolio Box */}
              </div>
              <div className="grid gap-[1.875rem] lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                  <img
                    className="w-full"
                    src={PortImg6}
                    alt="Portfolio Mockup"
                  ></img>
                  <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <a
                      className="inline-flex items-center justify-center"
                      href={PortImg6}
                      title="Portfolio Image" data-fancybox="gallery"
                    >
                      <FiCircle
                        className="stroke-[2] stroke-white"
                        size={32}
                      ></FiCircle>
                    </a>
                  </div>
                  {/* Portfolio Box */}
                </div>
                <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                  <img
                    className="w-full"
                    src={PortImg7}
                    alt="Portfolio Mockup"
                  ></img>
                  <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <a
                      className="inline-flex items-center justify-center"
                      href={PortImg7}
                      title="Portfolio Image" data-fancybox="gallery"
                    >
                      <FiCircle
                        className="stroke-[2] stroke-white"
                        size={32}
                      ></FiCircle>
                    </a>
                  </div>
                  {/* Portfolio Box */}
                </div>
              </div>
            </div>
            {/* Portfolio List */}
          </div>
        </Fancybox>
        <div className="viewAll text-center w-full mt-[3.125rem] md:mt-[4.0625rem]">
          <p className="text-desc2 font-NunitoSans text-[1rem] md:text-[1.125rem]">
            Want to see my professional work.{" "}
            <Link
              className="text-accent font-Poppins font-medium hover:text-accent2 underline underline-offset-8"
              to="/"
              title="Click here to View More"
            >
              Click here to View More
            </Link>
          </p>
          {/* View All */}
        </div>
      </div>
      {/* Portfolio Wrap */}
    </section>
  );
};

export default Portfolio2;
