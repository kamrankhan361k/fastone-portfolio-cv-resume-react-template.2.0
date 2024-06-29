import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <li>
        <span className="flex justify-between items-center w-full relative">
          <Link
            className="text-white block font-Poppins text-[2rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]"
            to={item.path}
            onClick={item.subNav && showSubnav}
          >
            {item.title}
          </Link>
          <i className="absolute right-0 top-1/2 -mt-3 cursor-pointer text-[1.5rem]">
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </i>
        </span>
        {subnav && (
          <ul className="pl-5 flex flex-col gap-2 my-5">
            {item.subNav.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="text-white text-[1.325rem]" to={item.path}>
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

export default SubMenu;
