import React from "react";
import { Helmet } from "react-helmet";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactInfoProfiles2 } from "../../components/ContactInfoProfiles";
import { ContactUs } from "../../components/ContactUs";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact - Fastone Personal Portfolio or CV/Resume React App</title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="Contact Me"
        hometitle="Home"
        homeURL="/"
        currentPage="Contact Me"
      ></PageTitle>
      <section className="pageWrap relative w-full">
        <iframe className="w-full relative border-0 -mt-[8.125rem] min-h-[35rem] sm:min-h-[45rem] md:min-h-[60.3125rem]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79473.6974959445!2d-0.12439217769754572!3d51.503068990147504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aa79bbf4be9%3A0x29c3c19db9be0356!2sLauderdale%20Rd%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1663526520974!5m2!1sen!2s"
          allowfullscreen
          loading="lazy" title="Contact Map"
        ></iframe>
        {/* Page Wrap */}
      </section>
      <ContactUs></ContactUs>
      <ContactInfoProfiles2></ContactInfoProfiles2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default ContactPage;
