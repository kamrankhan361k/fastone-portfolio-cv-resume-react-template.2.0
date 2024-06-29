import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";

const MenuLinks = () => {
  return (
    <nav className="relative hidden lg:block">
      <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Home
            <FiChevronDown className="absolute right-0 top-[4px]"></FiChevronDown>
          </span>
          <ul
            className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]"
            style={{ backgroundImage: `url(${PatternImg2})` }}
          >
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/"
                title="Homepage 1"
              >
                Homepage 1
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/home2"
                title="Homepage 2"
              >
                Homepage 2
              </Link>
            </li>
          </ul>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Blog
            <FiChevronDown className="absolute right-0 top-[4px]"></FiChevronDown>
          </span>
          <ul
            className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]"
            style={{ backgroundImage: `url(${PatternImg2})` }}
          >
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/blog"
                title="Blog Style 1"
              >
                Blog Style 1
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/blog2"
                title="Blog Style 2"
              >
                Blog Style 2
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/blog/:Id"
                title="Blog Detail"
              >
                Blog Detail
              </Link>
            </li>
          </ul>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Portfolio
            <FiChevronDown className="absolute right-0 top-[4px]"></FiChevronDown>
          </span>
          <ul
            className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]"
            style={{ backgroundImage: `url(${PatternImg2})` }}
          >
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/portfolio"
                title="Portfolio Style 1"
              >
                Portfolio Style 1
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/portfolio2"
                title="Portfolio Style 2"
              >
                Portfolio Style 2
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/portfolio3"
                title="Portfolio Style 3"
              >
                Portfolio Style 3
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/portfolio/:Id"
                title="Portfolio Detail"
              >
                Portfolio Detail
              </Link>
            </li>
          </ul>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Pages
            <FiChevronDown className="absolute right-0 top-[4px]"></FiChevronDown>
          </span>
          <ul
            className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]"
            style={{ backgroundImage: `url(${PatternImg2})` }}
          >
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/plans"
                title="Plans"
              >
                Plans
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/404"
                title="Error Page"
              >
                Error Page
              </Link>
            </li>
          </ul>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Service
            <FiChevronDown className="absolute right-0 top-[4px]"></FiChevronDown>
          </span>
          <ul
            className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]"
            style={{ backgroundImage: `url(${PatternImg2})` }}
          >
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/service"
                title="Service"
              >
                Service
              </Link>
            </li>
            <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
              <Link
                className="hover:text-accent text-accent2 pr-5 relative block"
                to="/service/:Id"
                title="Service Detail"
              >
                Service Detail
              </Link>
            </li>
          </ul>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <Link
            className="group-hover:text-accent text-accent2 pr-5 relative block"
            to="/contact"
            title="Contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuLinks;
