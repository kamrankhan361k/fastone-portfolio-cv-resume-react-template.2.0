import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactUs2 } from "../../components/ContactUs";
import { FreelanceWork3 } from "../../components/FreelanceWork";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Pagination2 } from "../../components/Pagination";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import Fancybox from "../../fancybox";

import PortImg1 from "../../assets/images/resources/portImg2-1.jpg";
import PortImg2 from "../../assets/images/resources/portImg2-2.jpg";
import PortImg3 from "../../assets/images/resources/portImg2-3.jpg";
import PortImg4 from "../../assets/images/resources/portImg2-4.jpg";
import PortImg5 from "../../assets/images/resources/portImg2-5.jpg";
import PortImg6 from "../../assets/images/resources/portImg2-6.jpg";
import PortImg7 from "../../assets/images/resources/portImg2-7.jpg";
import PortImg8 from "../../assets/images/resources/portImg2-8.jpg";
import PortImg9 from "../../assets/images/resources/portImg2-9.jpg";

const filterList = [
  {
    filterItem: "All",
    filterLink: "/#",
  },
  {
    filterItem: "Graphic",
    filterLink: "/#",
  },
  {
    filterItem: "Development",
    filterLink: "/#",
  },
  {
    filterItem: "Illustration",
    filterLink: "/#",
  },
  {
    filterItem: "Figma",
    filterLink: "/#",
  },
];

const PortfolioPage2 = () => {
  const [filter, setFilter] = useState("all");
  // const [portfolios, setPortfolios] = useState([]);

  // useEffect(() => {
  //   setPortfolios(portfolios);
  // }, []);

  // useEffect(() => {
  //   setPortfolios([]);

  //   const filtered = portfolios.map((p) => ({
  //     ...p,
  //     filtered: p.portCate.includes(filter),
  //   }));
  //   setPortfolios(filtered);
  // }, [filter]);

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Portfolio - Fastone Personal Portfolio or CV/Resume React App
        </title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="Portfolio"
        hometitle="Home"
        homeURL="/"
        currentPage="Portfolio"
      ></PageTitle>
      <FreelanceWork3></FreelanceWork3>
      <section className="pageWrap pt-20 pb-[6.875rem] relative w-full">
        <div className="container sm:container md:container lg:container xl:max-w-[85.625rem] mx-auto">
          <div className="pageInner grid gap-10 md:gap-20 grid-cols-1 w-full">
            <ul className="filterList flex flex-wrap justify-center items-center">
              {filterList.map(
                (item, index) =>
                  index < 5 && (
                    <li key={index}>
                      <Link
                        className="group flex items-center justify-center font-Poppins font-semibold text-[1rem] md:text-[1.25rem] text-accent2 py-[12px] px-[1.375rem] gap-2 relative hover:pr-11 hover:bg-accent hover:text-white rounded-[5px] md:rounded-[10px] cursor-pointer transition-all ease-linear"
                        to={item.filterLink}
                        title={item.filterItem}
                        active={filter === `${item.filterItem}`}
                        onClick={() => setFilter(item.filterItem)}
                      >
                        {item.filterItem}
                        <FiChevronDown className="font-bold absolute right-[1.375rem] opacity-0 group-hover:opacity-100"></FiChevronDown>
                      </Link>
                    </li>
                  )
              )}
            </ul>
            <Fancybox>
              <div className="portList flex flex-wrap relative mx-[-.9375rem]">
                <div className="basis-full md:basis-[28.625%] px-[.9375rem] grid gap-[1.875rem]">
                  <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
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
                  <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
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
                  <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
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
                  <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
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
                  <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
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
                    <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
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
                    <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
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
                <div className="basis-full md:basis-1/2 px-[.9375rem] md:order-1 sm:order-1 order-0 mt-[1.875rem]">
                  <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
                    <img
                      className="w-full"
                      src={PortImg8}
                      alt="Portfolio Mockup"
                    ></img>
                    <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                      <a
                        className="inline-flex items-center justify-center"
                        href={PortImg8}
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
                <div className="basis-full md:basis-1/2 px-[.9375rem] md:order-1 sm:order-1 order-0 mt-[1.875rem]">
                  <div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
                    <img
                      className="w-full"
                      src={PortImg9}
                      alt="Portfolio Mockup"
                    ></img>
                    <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                      <a
                        className="inline-flex items-center justify-center"
                        href={PortImg9}
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
                {/* Portfolio List */}
              </div>
            </Fancybox>
            <Pagination2></Pagination2>
            {/* Page Inner */}
          </div>
        </div>
        {/* Page Wrap */}
      </section>
      <ContactUs2></ContactUs2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default PortfolioPage2;
