import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactUs2 } from "../../components/ContactUs";
import { FreelanceWork3 } from "../../components/FreelanceWork";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Pagination2 } from "../../components/Pagination";
import { ReactComponent as RightDownIcon } from "../../lib/icons/RightDown.svg";
import { portfolio } from "../../data/portfolio";
import { FiChevronDown } from "react-icons/fi";

const filterList = [
  {
    filterItem: "All",
  },
  {
    filterItem: "Graphic",
  },
  {
    filterItem: "Development",
  },
  {
    filterItem: "Illustration",
  },
  {
    filterItem: "Figma",
  },
];

const PortfolioPage = () => {
  const [item, setItem] = useState({ filterItem: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.filterItem === "all") {
      setProjects(portfolio);
    } else {
      const newProjects = portfolio.filter((project) => {
        return project.portcate.toLowerCase() === item.filterItem;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ filterItem: e.target.textContent.toLowerCase() });
    setActive(index);
  };

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
        <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
          <div className="pageInner grid gap-10 md:gap-20 grid-cols-1 w-full">
            <ul className="filterList flex flex-wrap justify-center items-center">
              {filterList.map(
                (item, index) =>
                  index < 5 && (
                    <li
                      key={index}
                      className={`${
                        active === index ? "active" : ""
                      } group flex items-center justify-center font-Poppins font-semibold text-[1rem] md:text-[1.25rem] text-accent2 py-[12px] px-[1.375rem] gap-2 relative hover:pr-11 hover:bg-accent hover:text-white rounded-[5px] md:rounded-[10px] cursor-pointer transition-all ease-linear`}
                      onClick={(e) => {
                        handleClick(e, index);
                      }}
                    >
                      {item.filterItem}
                      <FiChevronDown className="font-bold absolute right-[1.375rem] opacity-0 group-hover:opacity-100"></FiChevronDown>
                    </li>
                  )
              )}
            </ul>
            <motion.div
              layout
              className="portList flex flex-wrap relative mx-[-.9375rem] mb-[-1.875rem]"
            >
              {projects.map(
                (item, index) =>
                  index < 7 && (
                    <div
                      className={item.portBox}
                      key={index}
                      portcate={item.portcate}
                    >
                      <motion.div
                        layout
                        className="portBox group mb-[1.875rem] before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full"
                      >
                        <img
                          className="w-full"
                          src={item.portImg}
                          alt={item.portTitle}
                        ></img>
                        <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                          <h3 className="text-white text-[1.375rem] md:text-[1.625rem] font-Poppins font-bold">
                            <Link to={`/portfolio/${item.id}`} title={item.portTitle}>
                              {item.portTitle}
                            </Link>
                          </h3>
                          <p className="text-white font-NunitoSans text-[1rem] md:text-[1.125rem] mt-1">
                            {item.portSubTitle}
                          </p>
                          <Link
                            className="inline-flex items-center justify-center border-[2px] sm:border-[5px] border-[rgba(255,255,255,.25)] hover:border-white rounded-[10px] h-[2.5rem] w-[2.5rem] sm:h-[3.5625rem] sm:w-[3.5625rem] mt-5"
                            to={`/portfolio/${item.id}`}
                            title={item.portTitle}
                          >
                            <RightDownIcon className="h-2.5 w-2.5 sm:h-4 sm:w-4 fill-white"></RightDownIcon>
                          </Link>
                        </div>
                      </motion.div>
                      {/* Portfolio Box */}
                    </div>
                  )
              )}
              {/* Portfolio List */}
            </motion.div>
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

export default PortfolioPage;
