import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { AboutUs2 } from "../../components/AboutUs";
import { Education2 } from "../../components/Education";
import { Header2 } from "../../components/Header";
import { Services2 } from "../../components/Services";
import { Partners2 } from "../../components/Partners";
import { Testimonials2 } from "../../components/Testimonials";
import { VideoBox } from "../../components/VideoBoxes";
import { MyExperienceAndSkills } from "../../components/MyExperienceAndSkills";
import { FunFacts } from "../../components/FunFacts";
import { Portfolio2 } from "../../components/Portfolio";
import { FreelanceWork2 } from "../../components/FreelanceWork";
import { PriceTable } from "../../components/PriceTable";
import { BlogPost2 } from "../../components/BlogPosts";
import { ContactUs2 } from "../../components/ContactUs";
import { BottomBar } from "../../components/BottomBar";

const HomePage2 = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home 2 - Fastone Personal Portfolio or CV/Resume React App</title>
      </Helmet>
      <Header2></Header2>
      <AboutUs2></AboutUs2>
      <Services2></Services2>
      <VideoBox></VideoBox>
      <Education2></Education2>
      <MyExperienceAndSkills></MyExperienceAndSkills>
      <FunFacts></FunFacts>
      <Portfolio2></Portfolio2>
      <FreelanceWork2></FreelanceWork2>
      <PriceTable></PriceTable>
      <Partners2></Partners2>
      <Testimonials2></Testimonials2>
      <BlogPost2></BlogPost2>
      <ContactUs2></ContactUs2>
      <BottomBar></BottomBar>
    </Fragment>
  );
};

export default HomePage2;
