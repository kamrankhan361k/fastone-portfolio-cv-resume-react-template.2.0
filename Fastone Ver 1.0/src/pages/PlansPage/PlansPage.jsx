import React from "react";
import { Helmet } from "react-helmet";
import { BottomBar2 } from "../../components/BottomBar";
import { ContactUs2 } from "../../components/ContactUs";
import { FreelanceWork2 } from "../../components/FreelanceWork";
import { FunFacts2 } from "../../components/FunFacts";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Partners2 } from "../../components/Partners";
import { PriceTable } from "../../components/PriceTable";

const PlansPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing Plans - Fastone Personal Portfolio or CV/Resume React App</title>
      </Helmet>
      <Header2></Header2>
      <PageTitle
        title="Pricing Plan"
        hometitle="Home"
        homeURL="/"
        currentPage="Pricing Plan"
      ></PageTitle>
      <FunFacts2></FunFacts2>
      <FreelanceWork2></FreelanceWork2>
      <PriceTable></PriceTable>
      <Partners2></Partners2>
      <ContactUs2></ContactUs2>
      <BottomBar2></BottomBar2>
    </React.Fragment>
  );
};

export default PlansPage;
