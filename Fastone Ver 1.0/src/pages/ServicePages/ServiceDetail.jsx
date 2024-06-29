import React from "react";
import { Helmet } from "react-helmet";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactInfoProfiles3 } from "../../components/ContactInfoProfiles";
import { ContactUs2 } from "../../components/ContactUs";
import { FreelanceWork3 } from "../../components/FreelanceWork";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Partners2 } from "../../components/Partners";
import { SocialLinks5 } from "../../components/SocialLinks";

import { ReactComponent as CheckMark } from "../../lib/icons/CheckMark.svg";
import { ReactComponent as UiCreativeDesignIcon } from "../../lib/icons/Curve.svg";

import PatternImg2 from "../../assets/images/patternImg2.jpg";
import ServImg1 from "../../assets/images/resources/servDetailImg1-1.jpg";
import ServImg2_1 from "../../assets/images/resources/servDetailImg2-1.jpg";

const ServiceDetail = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Service Detail - Fastone Personal Portfolio or CV/Resume React App
        </title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="Service Detail"
        hometitle="Home"
        homeURL="/"
        currentPage="Service Detail"
      ></PageTitle>
      <FreelanceWork3></FreelanceWork3>
      <section className="pageWrap py-[5rem] md:py-[5.5rem] lg:py-[6.875rem] relative w-full">
        <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
          <div className="servDetail relative w-full">
            <div className="servDetailTop gap-[1.875rem] lg:flex items-end relative w-full mb-[3.125rem] sm:mb-[4rem] md:mb-[5.3125rem]">
              <div className="servDetailImage relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden w-full lg:max-w-[48.125rem]">
                <img className="w-full" src={ServImg1} alt=""></img>
                <SocialLinks5></SocialLinks5>
                {/* Service Detail Image */}
              </div>
              <div className="servDetailInfoWrap flex flex-col w-full lg:w-[initial] gap-[2.8125rem]">
                <div className="servDetailInfo p-8 lg:px-16 lg:py-12 xl:px-20 xl:py-14 relative flex gap-[1.5625rem] mt-5 lg:ml-[-10.625rem] lg:min-w-[35.625rem] z-[1]">
                  <div
                    className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                    style={{ backgroundImage: `url(${PatternImg2})` }}
                  ></div>
                  <UiCreativeDesignIcon className="h-[5.3125rem] w-[5.3125rem] fill-accent"></UiCreativeDesignIcon>
                  <div className="flex flex-col gap-2">
                    <span className="text-accent font-NunitoSans text-[1rem] md:text-[1.125rem] font-semibold">
                      Services, Technology
                    </span>
                    <h2 className="text-accent2 font-Poppins font-bold leading-[1.3] text-[1.875rem] lg:text-[2rem] xl:text-[2.5rem]">
                      Stratagy & Research
                    </h2>
                  </div>
                </div>
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
                {/* Service Detail Information Wrap */}
              </div>
              {/* Service Detail Top */}
            </div>
            <div className="servDetailDesc flex flex-col gap-6 w-full">
              <h3 className="text-accent2 font-Poppins font-bold text-[1.75rem] md:text-[2.25rem]">
                An Interactive Story
              </h3>
              <p className="text-desc2 font-NunitoSans font-normal text-[1rem] md:text-[1.125rem] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Home
                renovations, especially those involving plentiful of demolition
                can be a very dusty affair. The same is true as we experience
                the emotional sensation of stress from our first instances of
                social rejection ridicule. We quickly learn to fear and thus
                automatically avoid potentially stressful situations of all
                kinds of all making mistakes.
              </p>
              <p className="text-desc2 font-NunitoSans font-normal text-[1rem] md:text-[1.125rem] leading-relaxed">
                Whether article spirits new her covered hastily sitting her.
                Money witty books nor son add. Chicken age had evening believe
                but proceed pretend mrs. At missed advice my it no sister. Miss
                told ham dull knew see she spot near can. Spirit her entire her
                called. Lorem ipsum dolor sit amet, consec tetur adipiscing
                elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar.Lorem ipsum dolor sit amet, consec tetur adipiscing
                elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>
            <div className="servDetailItem grid grid-cols-1 lg:grid-cols-2 gap-9 w-full mt-[3.75rem]">
              <div className="servDetailDesc flex flex-col gap-5 w-100">
                <h4 className="text-accent2 font-Poppins font-bold text-[1.325rem] md:text-[1.625rem]">
                  Manage Job Ads
                </h4>
                <p className="text-desc2 font-NunitoSans font-normal text-[1rem] md:text-[1.125rem] leading-relaxed">
                  Objectively pursue diverse catalysts for change for
                  interoperable meta-services. Distinctively re-engineer
                  revolutionary meta-services and premium architectures.
                  Intrinsically incubate intuitive opportunities and real-time
                  potentialities. Appropriately communicate one-to-one
                  technology.
                </p>
                <p className="text-desc2 font-NunitoSans font-normal text-[1rem] md:text-[1.125rem] leading-relaxed">
                  The advantage of its Latin origin and the relative
                  meaninglessness of Lorum Ipsum is that the text does not
                  attract attention to itself or distract the viewer's attention
                  from the layout.
                </p>
              </div>
              <div className="servDetailImage relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden w-full">
                <img className="w-full" src={ServImg2_1} alt=""></img>
                {/* Service Detail Image */}
              </div>
            </div>
            {/* Service Detail */}
          </div>
        </div>
        {/* Page Wrap */}
      </section>
      <ContactInfoProfiles3></ContactInfoProfiles3>
      <Partners2></Partners2>
      <ContactUs2></ContactUs2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default ServiceDetail;
