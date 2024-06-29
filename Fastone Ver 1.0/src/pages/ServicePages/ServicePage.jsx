import React from "react";
import { Helmet } from "react-helmet";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactUs2 } from "../../components/ContactUs";
import { FreelanceWork2 } from "../../components/FreelanceWork";
import { FunFacts3 } from "../../components/FunFacts";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Pagination2 } from "../../components/Pagination";
import { services } from "../../data/services";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          My Services - Fastone Personal Portfolio or CV/Resume React App
        </title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="My Services"
        hometitle="Home"
        homeURL="/"
        currentPage="My Services"
      ></PageTitle>
      <section className="pageWrap py-[3.5rem] md:py-[3.5rem] lg:py-[6.875rem] relative w-full">
        <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
          <div className="pageInner grid gap-10 md:gap-20 grid-cols-1 w-full">
            <div className="servicesBoxes relative w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.875rem]">
                {services.map(
                  (item, index) =>
                    index < 6 && (
                      <div className="gridItem" key={index}>
                        <div className="serviceBox flex flex-wrap gap-3 flex-col justify-center relative w-full z-[1] min-h-[20rem] md:min-h-[24.375rem] p-[1.875rem] md:p-[3.125rem]">
                          <div
                            className={`serviceBg before:absolute before:inset-0 before:${item.bgColor} before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] ${item.bgColor}`}
                            style={{ backgroundImage: `url(${PatternImg2})` }}
                          ></div>
                          <span className="inline-block mb-[.9375rem]">
                            {item.servIcon}
                          </span>
                          <h3
                            className={`text-[1.325rem] md:text-[1.5rem] font-Poppins font-semibold max-w-full md:max-w-[80%] ${item.titleColor}`}
                          >
                            <Link
                              to={`/service/${item.id}`}
                              title={item.servTitle}
                            >
                              {item.servTitle}
                            </Link>
                          </h3>
                          <p
                            className={`text-[1rem] md:text-[1.125rem] font-NunitoSans ${item.descColor}`}
                          >
                            {item.servDesc}
                          </p>
                        </div>
                      </div>
                    )
                )}
              </div>
              {/* Services Boxes */}
            </div>
            <Pagination2></Pagination2>
            {/* Page Inner */}
          </div>
        </div>
        {/* Page Wrap */}
      </section>
      <FreelanceWork2></FreelanceWork2>
      <FunFacts3></FunFacts3>
      <ContactUs2></ContactUs2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default ServicePage;
