import React from "react";
import { Helmet } from "react-helmet";
import { FaHome } from "react-icons/fa";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactUs2 } from "../../components/ContactUs";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Partners2 } from "../../components/Partners";
import { FiSearch } from "react-icons/fi";
import ErrorMockup from "../../assets/images/resources/404Mockup.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Error Page - Fastone Personal Portfolio or CV/Resume React App
        </title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="404 Error"
        hometitle="Home"
        homeURL="/"
        currentPage="404 Error Page"
      ></PageTitle>
      <section className="pageWrap pt-[4rem] md:pt-[4.375rem] relative w-full">
        <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
          <div className="errorPage text-center relative flex flex-col items-center justify-center w-full">
            <div className="errorPageInner">
              <h2 className="text-[10rem] sm:text-[13rem] md:text-[15rem] lg:text-[18.75rem] text-stroke-10 text-stroke-accent text-fill-transparent font-Poppins font-bold leading-none -mb-6">
                404
              </h2>
              <img className="inline-block mb-5" src={ErrorMockup} alt="Error Page"></img>
              <h3 className="text-[#647c9f] font-Poppins font-medium text-[1.875rem] md:text-[2.5rem]">
                oops page not found
              </h3>
              <form className="relative max-w-[33.75rem] w-full mt-10 mx-auto block">
                <input
                  className="h-[3.125rem] md:h-[4.0625rem] w-full rounded-[5px] md:rounded-[10px] border-[1px] border-solid border-[#c2ccda] text-[1rem] font-NunitoSans font-semibold px-5 md:px-[2.1875rem]"
                  type="search"
                  placeholder="Enter your keyword..."
                ></input>
                <button
                  type="submit"
                  className="flex items-center justify-center bg-accent text-white hover:bg-accent2 hover:text-white w-[3.4375rem] absolute right-0 text-center top-0 bottom-0 rounded-r-[5px] md:rounded-r-[10px]"
                >
                  <FiSearch size={20}></FiSearch>
                </button>
              </form>
              <Link className="text-accent hover:text-accent2 font-Poppins text-[1rem] md:text-[1.0625rem] font-bold uppercase inline-flex gap-2 items-center underline underline-offset-7 mt-[1.875rem] md:mt-[2.8125rem]" to="/" title="Back to Home"><FaHome></FaHome>Back to Home</Link>
            </div>
            {/* Error Page */}
          </div>
        </div>
        {/* Page Wrap */}
      </section>
      <Partners2></Partners2>
      <ContactUs2></ContactUs2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default ErrorPage;
