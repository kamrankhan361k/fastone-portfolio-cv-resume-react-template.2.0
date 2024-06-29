import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FiHeart } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import PortImg1 from "../../assets/images/resources/portDetailImg1-1.jpg";
import { ReactComponent as CheckMark } from "../../lib/icons/CheckMark.svg";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactInfoProfiles3 } from "../../components/ContactInfoProfiles";
import { ContactUs2 } from "../../components/ContactUs";
import { FreelanceWork3 } from "../../components/FreelanceWork";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Partners2 } from "../../components/Partners";
import { ReplyForm } from "../../components/ReplyForm";
import { SocialLinks4 } from "../../components/SocialLinks";
import { portDetail } from "../../data/portfolio-detail";

const PortfolioDetail = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    let portfolio = portDetail.find(
      (portfolio) => portfolio.id === parseInt(id)
    );
    if (portfolio) {
      setPortfolio(portfolio);
    }
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Portfolio Detail - Fastone Personal Portfolio or CV/Resume React App
        </title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="Portfolio Detail"
        hometitle="Home"
        homeURL="/"
        currentPage="Portfolio Detail"
      ></PageTitle>
      <section className="pageWrap pt-[3.5rem] md:pt-[3.5rem] lg:pt-[6.875rem] relative w-full">
        <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
          <div className="portDetail relative w-full">
            <div className="portDetailImage relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden">
              <img
                className="w-full"
                src={PortImg1}
                alt="Graphic Illustration"
              ></img>
              <SocialLinks4></SocialLinks4>
              {/* Portfolio Detail Image */}
            </div>
            <div className="portInfo relative z-[1] px-5 sm:px-10 md:px-[4.375rem] py-5 md:pb-10 md:pt-[3.125rem] mt-5 sm:mt-[-8.4375rem] left-0 sm:left-[7.8125rem] max-w-full sm:max-w-[35rem]">
              <div
                className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                style={{ backgroundImage: `url(${PatternImg2})` }}
              ></div>
              <h2 className="text-accent2 text-[1.75rem] md:text-[2.25rem] font-Poppins font-bold">
                Graphic Illustration
              </h2>
              <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-12">
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
                    34
                  </span>
                  <span className="font-Poppins font-medium text-accent2 text-[.9375rem] inline-flex gap-2 items-center">
                    <FiHeart className="stroke-accent" size={17}></FiHeart>
                    50
                  </span>
                </div>
              </div>
            </div>
            <div className="portDetailInner flex flex-col gap-10 px-0 sm:px-[2.5rem] md:px-[6.25rem] pt-10 md:pt-20 w-full">
              <div className="portDetailItem grid gap-[3.125rem] md:grid-cols-3 grid-cols-1 w-full">
                <div className="portDetailItemInner flex flex-col gap-6 col-span-2">
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Home renovations, especially those involving
                    plentiful of demolition can be a very dusty affair. The same
                    is true as we experience the emotional sensation of stress
                    from our first instances of social rejection ridicule. We
                    quickly learn to fear and thus automatically avoid
                    potentially stressful situations of all kinds of all making
                    mistakes.
                  </p>
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal">
                    Whether article spirits new her covered hastily sitting her.
                    Money witty books nor son add. Chicken age had evening
                    believe but proceed pretend mrs. At missed advice my it no
                    sister. Miss told ham dull knew see she spot near can.
                    Spirit her entire her called. Lorem ipsum dolor sit amet,
                    consec tetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar. Lorem ipsum dolor sit amet,
                    consec tetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar.
                  </p>
                </div>
                <div className="portDetailItemInner flex flex-col gap-[3.125rem]">
                  <ul className="flex flex-col gap-5 sm:gap-[3.125rem]">
                    <li className="flex flex-col gap-1">
                      <strong className="font-Poppins font-bold text-[1rem] md:text-[1.125rem] uppercase text-accent2 leading-normal">
                        Website:
                      </strong>
                      <span className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-none">
                        websroad.com
                      </span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <strong className="font-Poppins font-bold text-[1rem] md:text-[1.125rem] uppercase text-accent2 leading-normal">
                        Date:
                      </strong>
                      <span className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-none">
                        August 02, 2022
                      </span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <strong className="font-Poppins font-bold text-[1rem] md:text-[1.125rem] uppercase text-accent2 leading-normal">
                        Services:
                      </strong>
                      <span className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-none">
                        Design, Art Direction, Website
                      </span>
                    </li>
                  </ul>
                  <Link
                    className="bg-accent text-white text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] lg:rounded-[1.25rem] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent2 hover:text-white text-center inline-block"
                    to="/home2"
                    title="Hire Me Now"
                  >
                    Hire Me Now
                  </Link>
                </div>
              </div>
              <h3 className="text-accent2 text-[1.75rem] md:text-[1.875rem] font-Poppins font-bold leading-normal max-w-full md:max-w-[40%]">
                What makes the best co-working space?
              </h3>
              <div className="portDetailItem grid gap-[1.875rem] md:grid-cols-2 grid-cols-1 w-full">
                <div className="portDetailItemInner flex flex-col gap-6">
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal">
                    Objectively pursue diverse catalysts for change for
                    interoperable meta-services. Distinctively re-engineer
                    revolutionary meta-services and premium architectures.
                    Intrinsically incubate intuitive opportunities and real-time
                    potentialities. Appropriately communicate one-to-one
                    technology.
                  </p>
                  <p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal">
                    The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout.
                  </p>
                </div>
                <div className="portDetailItemInner">
                  <ul className="flex flex-col gap-5">
                    <li className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal flex gap-3">
                      <CheckMark className="fill-accent h-[1rem] md:h-[1.125rem]"></CheckMark>
                      <span>Quis Nostrud Exercitation Ullamco Laboris.</span>
                    </li>
                    <li className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal flex gap-3">
                      <CheckMark className="fill-accent h-[1rem] md:h-[1.125rem]"></CheckMark>
                      <span>Ullamco Laboris Nisi Ut Aliquip.</span>
                    </li>
                    <li className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal flex gap-3">
                      <CheckMark className="fill-accent h-[1rem] md:h-[1.125rem]"></CheckMark>
                      <span>Reprehenderit In Voluptate Velit.</span>
                    </li>
                    <li className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal flex gap-3">
                      <CheckMark className="fill-accent h-[1rem] md:h-[1.125rem]"></CheckMark>
                      <span>Accusantium Doloremque Laudantium.</span>
                    </li>
                    <li className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.125rem] font-semibold leading-normal flex gap-3">
                      <CheckMark className="fill-accent h-[1rem] md:h-[1.125rem]"></CheckMark>
                      <span>Voluptate Velit Esse Cillum.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Portfolio Detail */}
          </div>
        </div>
        {/* Page Wrap */}
      </section>
      <FreelanceWork3></FreelanceWork3>
      <ReplyForm></ReplyForm>
      <ContactInfoProfiles3></ContactInfoProfiles3>
      <Partners2></Partners2>
      <ContactUs2></ContactUs2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default PortfolioDetail;
