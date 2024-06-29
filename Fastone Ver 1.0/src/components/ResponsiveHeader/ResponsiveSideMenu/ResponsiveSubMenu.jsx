import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveSubMenu = ({ item }) => {
  const [responsiveSubnav, setResponsiveSubnav] = useState(false);
  const showResponsiveSubnav = () => setResponsiveSubnav(!responsiveSubnav);

  return (
    <>
      <li>
        <span className="flex justify-between items-center w-full relative">
          <Link
            className="text-white block font-Poppins text-[1.125rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]"
            to={item.path}
            onClick={item.responsiveSubNav && showResponsiveSubnav}
          >
            {item.title}
          </Link>
          <i className="absolute right-0 top-[5.5px] cursor-pointer">
            {item.responsiveSubNav && responsiveSubnav
              ? item.iconOpened
              : item.responsiveSubNav
              ? item.iconClosed
              : null}
          </i>
        </span>
        {responsiveSubnav && (
          <ul className="pl-3 flex flex-col gap-2 mt-2">
            {item.responsiveSubNav.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="text-white" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
};

export default ResponsiveSubMenu;
