import React from "react";
import { Helmet } from "react-helmet";
import { FiHeart } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import PostImg1 from "../../assets/images/resources/postDetailImg1.jpg";
import { RecentPost } from "../../components/BlogPosts";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactUs2 } from "../../components/ContactUs";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Sidebar2 } from "../../components/Sidebar";
import { SocialLinks4 } from "../../components/SocialLinks";
import { FaQuoteLeft } from "react-icons/fa";
import { ReplyForm2 } from "../../components/ReplyForm";
import { Author } from "../../components/Author";
import { Comment } from "../../components/Comment";

const tagList = [
  {
    tagItem: "Fashion",
    tagLink: "#",
  },
  {
    tagItem: "Jobs",
    tagLink: "#",
  },
  {
    tagItem: "Hire",
    tagLink: "#",
  },
  {
    tagItem: "Corporate",
    tagLink: "#",
  },
  {
    tagItem: "E-commerce",
    tagLink: "#",
  },
  {
    tagItem: "Agency",
    tagLink: "#",
  },
  {
    tagItem: "Responsive",
    tagLink: "#",
  },
];

const BlogDetail = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Blog Detail - Fastone Personal Portfolio or CV/Resume React App
        </title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="Blog Detail"
        hometitle="Home"
        homeURL="/"
        currentPage="Blog Detail"
      ></PageTitle>
      <section className="pageWrap pt-[3.5rem] lg:pt-20 relative w-full">
        <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
          <div className="pageInner grid gap-[3.125rem] lg:gap-[1.875rem] lg:grid-cols-3 grid-cols-1 w-[calc(100vw-2.5rem)] md:w-full">
            <div className="col-span-2 grid gap-10 md:gap-20">
              <div className="postDetail relative w-[calc(100vw-2.5rem)] md:w-full">
                <div className="postDetailImage relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden md:w-full">
                  <img className="w-full" src={PostImg1} alt=""></img>
                  <SocialLinks4></SocialLinks4>
                  {/* Post Detail Image */}
                </div>
                <div className="postInfo relative z-[1] pr-5 pl-12 sm:px-8 sm:pl-16 md:px-20 py-5 sm:py-7 md:pt-11 md:pb-9 mt-[-10rem] ml-24 md:ml-10 md:left-1/2 md:-translate-x-1/2 max-w-[80%] md:max-w-[calc(100%-12rem)] md:pl-[4.6875rem]">
                  <div
                    className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                    style={{ backgroundImage: `url(${PatternImg2})` }}
                  ></div>
                  <span className="bg-accent rounded-[10px] w-[5.25rem] absolute text-center text-white text-[1.375rem] font-Poppins font-semibold p-1 top-[3.4375rem] left-[-3.125rem]">
                    <i className="text-accent2 uppercase text-[13px] font-Poppins font-bold block not-italic leading-none bg-white py-[7px] mb-1 rounded-t-[8px] rounded-b-[3px]">
                      June
                    </i>
                    15
                  </span>
                  <span className="flex items-center text-accent gap-1 text-[1rem] font-NunitoSans font-bold">
                    By
                    <Link className="hover:text-accent2" to="/" title="">
                      Berline Tokyo
                    </Link>
                  </span>
                  <h3 className="text-accent2 text-[1.325rem] md:text-[1.625rem] font-Poppins font-semibold mt-1">
                    Spring Which I Enjoy With For Effective Agile Team
                  </h3>
                  <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-12">
                    <span className="flex items-center text-accent gap-1 text-[.9375] font-NunitoSans font-semibold">
                      <Link className="hover:text-accent2" to="#" title="">
                        Design
                      </Link>
                      ,
                      <Link className="hover:text-accent2" to="#" title="">
                        Events
                      </Link>
                      ,
                      <Link className="hover:text-accent2" to="#" title="">
                        Technology
                      </Link>
                    </span>
                    <div className="flex items-center gap-7">
                      <span className="font-Poppins font-medium text-accent2 text-[.9375rem] inline-flex gap-2 items-center">
                        <BiCommentDetail
                          className="fill-accent"
                          size={17}
                        ></BiCommentDetail>
                        35
                      </span>
                      <span className="font-Poppins font-medium text-accent2 text-[.9375rem] inline-flex gap-2 items-center">
                        <FiHeart className="stroke-accent" size={17}></FiHeart>
                        20
                      </span>
                    </div>
                  </div>
                </div>
                <div className="postDetailInner flex flex-col gap-5 w-full mt-[3.4375rem]">
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Home renovations, especially those involving
                    plentiful of demolition can be a very dusty affair. The same
                    is true as we experience the emotional sensation of stress
                    from our first instances of social rejection ridicule. We
                    quickly learn to fear and thus automatically avoid
                    potentially stressful situations of all kinds, including the
                    most common of all making mistakes.
                  </p>
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] leading-normal">
                    Whether article spirits new her covered hastily sitting her.
                    Money witty books nor son add. Chicken age had evening
                    believe but proceed pretend mrs. At missed advice my it no
                    sister. Miss told ham dull knew see she spot near can.
                    Spirit her entire her called.
                  </p>
                  <blockquote className="relative flex flex-col justify-center items-center text-center gap-3 px-6 sm:px-10 md:px-20 py-8 md:py-[3.125rem] md:min-h-[12.1875rem] my-5 md:my-8">
                    <div
                      className="before:absolute before:inset-0 before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
                      style={{ backgroundImage: `url(${PatternImg2})` }}
                    ></div>
                    <p className="font-NunitoSans text-white text-[1rem] md:text-[1.25rem] italic leading-relaxed relative inline-block">
                      <FaQuoteLeft
                        className="text-white opacity-30 absolute left-4 -top-2"
                        size={32}
                      ></FaQuoteLeft>
                      "A business consulting agency is involved in the planning,
                      implementation, and education of businesses."
                    </p>
                    <span className="font-NunitoSans text-white text-[1rem] md:text-[1.0625rem] leading-normal">
                      Creative Agency{" "}
                      <strong className="italic font-bold">Alice Mellor</strong>
                    </span>
                  </blockquote>
                  <h3 className="text-accent2 text-[1.625rem] font-Poppins font-bold">
                    What makes the best co-working space?
                  </h3>
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] leading-normal">
                    Objectively pursue diverse catalysts for change for
                    interoperable meta-services. Distinctively re-engineer
                    revolutionary meta-services and premium architectures.
                    Intrinsically incubate intuitive opportunities and real-time
                    potentialities. Appropriately communicate one-to-one
                    technology.
                  </p>
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] leading-normal">
                    The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout.
                  </p>
                  <div className="relative flex flex-col md:flex-row items-center gap-5 sm:gap-[4rem] text-center sm:text-left px-6 md:px-10 py-8 md:py-[3.125rem] mt-8">
                    <div
                      className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-80 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                      style={{ backgroundImage: `url(${PatternImg2})` }}
                    ></div>
                    <h4 className="text-[1.325rem] md:text-[1.5rem] text-accent2 uppercase font-Poppins font-bold">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-[10px] justify-center sm:justify-start w-full">
                      {tagList.map(
                        (item, index) =>
                          index < 5 && (
                            <Link
                              key={index}
                              className="relative font-NunitoSans text-[.9375rem] font-semibold bg-white text-accent2 hover:bg-accent hover:text-white rounded-[5px] md:rounded-[10px] py-[10.25px] px-[1.325rem] md:px-[1.5rem]"
                              to={item.tagLink}
                              title={item.tagItem}
                              target="_blank"
                            >
                              {item.tagItem}
                            </Link>
                          )
                      )}
                    </div>
                  </div>
                  <Author></Author>
                  <Comment></Comment>
                  <ReplyForm2></ReplyForm2>
                </div>
                {/* Post Detail */}
              </div>
            </div>
            <Sidebar2></Sidebar2>
            {/* Page Inner */}
          </div>
        </div>
        {/* Page Wrap */}
      </section>
      <RecentPost></RecentPost>
      <ContactUs2></ContactUs2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default BlogDetail;
