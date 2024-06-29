import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { posts } from "../../data/posts";
import { FaCalendarAlt } from "react-icons/fa";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactUs2 } from "../../components/ContactUs";
import { FreelanceWork3 } from "../../components/FreelanceWork";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Fastone Personal Portfolio or CV/Resume React App</title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="Blog & Insight"
        hometitle="Home"
        homeURL="/"
        currentPage="Blog"
      ></PageTitle>
      <FreelanceWork3></FreelanceWork3>
      <section className="pageWrap pt-20 pb-20 md:pb-[6.875rem] relative w-full">
        <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
          <div className="pageInner grid gap-[3.125rem] lg:gap-[1.875rem] lg:grid-cols-3 grid-cols-1 w-full">
            <div className="col-span-2 grid gap-10 md:gap-12 lg:gap-20">
              <div className="postsList grid gap-[1.875rem] lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative w-full">
                {posts.map(
                  (item, index) =>
                    index < 6 && (
                      <div
                        className="postBox group relative w-full"
                        key={index}
                      >
                        <div className="postImg overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] w-full">
                          <Link to={`/blog/${item.id}`} title={item.postTitle}>
                            <img
                              className="w-full group-hover:scale-105"
                              src={item.postImg}
                              alt={item.postTitle}
                            ></img>
                          </Link>
                        </div>
                        <div className="postInfo relative z-[1] px-5 sm:px-8 md:px-10 py-5 sm:py-7 md:py-8 mt-[-4.6875rem] inset-x-[10px] max-w-[calc(100%-1.25rem)]">
                          <div
                            className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                            style={{ backgroundImage: `url(${PatternImg2})` }}
                          ></div>
                          <span className="flex items-center text-accent gap-[10px] text-[.9375rem] font-NunitoSans font-semibold">
                            <FaCalendarAlt></FaCalendarAlt>{" "}
                            <Link
                              className="hover:text-accent2"
                              to={item.postDateLink}
                              title={item.postDate}
                            >
                              {item.postDate}
                            </Link>
                          </span>
                          <h3 className="text-accent2 text-[1.25rem] font-Poppins font-semibold mt-2">
                            <Link
                              className="hover:text-accent"
                              to={`/blog/${item.id}`}
                              title={item.postTitle}
                            >
                              {item.postTitle}
                            </Link>
                          </h3>
                          <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
                          <span className="flex items-center text-accent gap-1 text-[1rem] font-NunitoSans font-bold">
                            By
                            <Link
                              className="hover:text-accent2"
                              to={item.postAuthorLink}
                              title={item.postAuthor}
                            >
                              {item.postAuthor}
                            </Link>
                          </span>
                        </div>
                        {/* Post Box */}
                      </div>
                    )
                )}
                {/* Posts List */}
              </div>
              <Pagination></Pagination>
            </div>
            <Sidebar></Sidebar>
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

export default BlogPage;
