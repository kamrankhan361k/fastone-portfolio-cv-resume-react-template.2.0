import * as FiIcons from "react-icons/fi";

export const MenuData = [
  {
    title: "Home",
    path: "#",
    iconClosed: <FiIcons.FiChevronDown className="text-white" />,
    iconOpened: <FiIcons.FiChevronUp className="text-white" />,
    subNav: [
      {
        title: "Homepage 1",
        path: "/",
      },
      {
        title: "Homepage 2",
        path: "/home2",
      },
    ],
  },
  {
    title: "Blog",
    path: "#",
    iconClosed: <FiIcons.FiChevronDown className="text-white" />,
    iconOpened: <FiIcons.FiChevronUp className="text-white" />,
    subNav: [
      {
        title: "Blog Style 1",
        path: "/blog",
        cName: "sub-nav",
      },
      {
        title: "Blog Style 2",
        path: "/blog2",
        cName: "sub-nav",
      },
      {
        title: "Blog Detail",
        path: "/blog/:Id",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Portfolio",
    path: "#",
    iconClosed: <FiIcons.FiChevronDown className="text-white" />,
    iconOpened: <FiIcons.FiChevronUp className="text-white" />,
    subNav: [
      {
        title: "Portfolio Style 1",
        path: "/portfolio",
        cName: "sub-nav",
      },
      {
        title: "Portfolio Style 2",
        path: "/portfolio2",
        cName: "sub-nav",
      },
      {
        title: "Portfolio Style 3",
        path: "/portfolio3",
        cName: "sub-nav",
      },
      {
        title: "Portfolio Detail",
        path: "/portfolio/:id",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Pages",
    path: "#",
    iconClosed: <FiIcons.FiChevronDown className="text-white" />,
    iconOpened: <FiIcons.FiChevronUp className="text-white" />,
    subNav: [
      {
        title: "Plans",
        path: "/plans",
        cName: "sub-nav",
      },
      {
        title: "Error Page",
        path: "/404",
        cName: "sub-nav",
      }
    ],
  },
  {
    title: "Service",
    path: "#",
    iconClosed: <FiIcons.FiChevronDown className="text-white" />,
    iconOpened: <FiIcons.FiChevronUp className="text-white" />,
    subNav: [
      {
        title: "Service",
        path: "/service",
        cName: "sub-nav",
      },
      {
        title: "Service Detail",
        path: "/service/:Id",
        cName: "sub-nav",
      }
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
