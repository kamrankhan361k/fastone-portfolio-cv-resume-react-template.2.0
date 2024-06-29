import { Link } from "react-router-dom";
import { bottomMenu } from "../../data/bottom-links";

const BottomBar = () => {
  return (
    <div className="bottomBarWrap relative w-full py-8">
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <div className="bottomBar gap-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-desc2 text-[1rem] md:text-[1.0625rem] font-NunitoSans font-semibold">
            &copy; 2022 All Right Reserved.
          </p>
          <ul className="flex relative divide-x divide-solid -mr-6">
            {bottomMenu.map(
              (item, index) =>
                index < 2 && (
                  <li
                    className="text-desc2 text-[1rem] md:text-[1.0625rem] font-NunitoSans font-semibold px-6 leading-none"
                    key={index}
                  >
                    <Link
                      className="hover:text-accent"
                      to={item.bottomMenuLink}
                      title={item.bottomMenuCap}
                    >
                      {item.bottomMenuCap}
                    </Link>
                  </li>
                )
            )}
          </ul>
          {/* Bottom Bar */}
        </div>
      </div>
      {/* Bottom Bar Wrap */}
    </div>
  );
};

export default BottomBar;
