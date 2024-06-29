import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";
import { BlogDetail, BlogPage, BlogPage2 } from "../pages/BlogPages";
import { ContactPage } from "../pages/ContactPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage, HomePage2 } from "../pages/HomePages";
import { PlansPage } from "../pages/PlansPage";
import { PortfolioDetail, PortfolioPage, PortfolioPage2, PortfolioPage3 } from "../pages/PortfolioPages";
import { ServiceDetail, ServicePage } from "../pages/ServicePages";

const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/home2" element={<HomePage2></HomePage2>} />
            <Route path="/blog" element={<BlogPage></BlogPage>} />
            <Route path="/blog/:Id" element={<BlogDetail></BlogDetail>} />
            <Route path="/blog2" element={<BlogPage2></BlogPage2>} />
            <Route path="/plans" element={<PlansPage></PlansPage>} />
            <Route path="/service" element={<ServicePage></ServicePage>} />
            <Route path="/service/:Id" element={<ServiceDetail></ServiceDetail>} />
            <Route path="/portfolio" element={<PortfolioPage></PortfolioPage>} />
            <Route path="/portfolio/:Id" element={<PortfolioDetail></PortfolioDetail>} />
            <Route path="/portfolio2" element={<PortfolioPage2></PortfolioPage2>} />
            <Route path="/portfolio3" element={<PortfolioPage3></PortfolioPage3>} />
            <Route path="/contact" element={<ContactPage></ContactPage>} />
            <Route path="/404" element={<ErrorPage></ErrorPage>} />
            <Route path="*" element={<ErrorPage></ErrorPage>} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </>
  );
};

export default RouterLinks;
