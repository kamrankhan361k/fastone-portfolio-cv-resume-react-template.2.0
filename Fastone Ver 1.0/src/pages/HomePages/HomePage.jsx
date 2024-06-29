import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { FeaturedArea } from "../../components/FeaturedArea";
import { AboutUs } from "../../components/AboutUs";
import { Services } from "../../components/Services";
import { MyWorkExperience } from "../../components/MyWorkExperience";
import { EducationAndSkills } from "../../components/EducationAndSkills";
import { Portfolio } from "../../components/Portfolio";
import { FreelanceWork } from "../../components/FreelanceWork";
import { Testimonials } from "../../components/Testimonials";
import { BlogPost } from "../../components/BlogPosts";
import { Partners } from "../../components/Partners";
import { ContactInfoProfiles } from "../../components/ContactInfoProfiles";
import { ContactUs } from "../../components/ContactUs";
import { BottomBar } from "../../components/BottomBar";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home - Fastone Personal Portfolio or CV/Resume React App</title>
      </Helmet>
      <Header></Header>
      <FeaturedArea></FeaturedArea>
      <AboutUs></AboutUs>
      <Services></Services>
      <MyWorkExperience></MyWorkExperience>
      <EducationAndSkills></EducationAndSkills>
      <Portfolio></Portfolio>
      <FreelanceWork></FreelanceWork>
      <Testimonials></Testimonials>
      <BlogPost></BlogPost>
      <Partners></Partners>
      <ContactInfoProfiles></ContactInfoProfiles>
      <ContactUs></ContactUs>
      <BottomBar></BottomBar>
    </Fragment>
  );
};

export default HomePage;
