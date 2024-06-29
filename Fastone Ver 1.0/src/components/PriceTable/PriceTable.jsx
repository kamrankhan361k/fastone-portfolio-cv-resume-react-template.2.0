import { Link } from "react-router-dom";
import { SectionTitle3 } from "../SectionTitles";
import PatternBg from "../../assets/images/patternImg2.jpg";
import PatternBg2 from "../../assets/images/patternImg4.jpg";
import SectionBg from "../../assets/images/secBg10.jpg";
import { priceTable } from "../../data/price-table";

const PriceTable = () => {
  return (
    <section className="priceTableWrap pt-[4.5rem] sm:pt-[5.5rem] md:pt-[6.25rem] relative w-full">
      <div
        className="top-[-15.625rem] bg-center bg-cover bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-[.85] before:bg-gray bg-gray bg-blend-multiply overflow-hidden inset-0 bottom-[14.375rem] z-[-2] absolute"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
        <SectionTitle3
          title="My Pricing"
          titleInner="Plans"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitle3>
        <div className="priceTableBoxes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-[3.75rem] relative items-start w-100">
          {priceTable.map(
            (item, index) =>
              index < 3 && (
                <div className={`${item.pacBox} relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] lg:rounded-[3.125rem] overflow-hidden drop-shadow-2xl`} key={index}>
                  <div
                    className={`before:absolute before:z-[1] before:inset-0 before:opacity-40 bg-blend-multiply w-full ${item.pacBoxHead} py-[2.1875rem] px-[2.5rem] xl:px-[3.75rem] min-h-[9rem] xl:min-h-[11.875rem] flex justify-start items-end bg-cover before:rounded-t-[10px] before:sm:rounded-t-[1.25rem] before:md:rounded-t-[3.125rem] rounded-t-[10px] sm:rounded-t-[1.25rem] md:rounded-t-[3.125rem]`}
                    style={{ backgroundImage: `url(${PatternBg2})` }}
                  >
                    <h3
                      className={`${item.pacTitleColor} text-[1.25rem] md:text-[1.375rem] uppercase font-bold font-Poppins relative z-[1]`}
                    >
                      {item.pacTitle}
                    </h3>
                  </div>
                  <div
                    className={`before:absolute before:z-[1] before:inset-0 before:opacity-40 bg-blend-multiply w-full ${item.pacBoxInner} flex flex-col bg-cover relative before:rounded-b-[10px] before:sm:rounded-b-[1.25rem] before:md:rounded-b-[3.125rem] rounded-b-[10px] sm:rounded-b-[1.25rem] md:rounded-b-[1.875rem] lg:rounded-b-[3.125rem]`}
                    style={{ backgroundImage: `url(${PatternBg})` }}
                  >
                    <h3
                      className={`${item.pacPriceColor} relative z-[1] font-Poppins font-semibold text-[2.5rem] xl:text-[3.125rem] leading-none`}
                    >
                      <sup
                        className={`${item.pacCurrencyColor} font-Poppins font-semibold text-[1.5rem] md:text-[2rem] leading-none relative -top-3`}
                      >
                        {item.pacCurrency}
                      </sup>
                      {item.pacPrice}
                    </h3>
                    <h5
                      className={`${item.pacSubColor} relative z-[1] font-NunitoSans font-bold text-[1rem] md:text-[1.125rem] mt-3`}
                    >
                      {item.pacSubTitle}
                    </h5>
                    <ul className="flex flex-col w-full relative z-[1] gap-3 mt-6">
                      {item.pacList.map(
                        (pacItem, index2) =>
                          index < 4 && (
                            <li
                              key={index2}
                              className={`${pacItem.pacListItemColor} text-[1rem] md:text-[1.0625rem] font-NunitoSans font-semibold`}
                            >
                              {pacItem.pacListItem}
                            </li>
                          )
                      )}
                    </ul>
                    <Link
                      className={`text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] text-center inline-block relative z-[1] w-full ${item.pacLinkBox} mt-10`}
                      to={item.pacLink}
                      title="Choose Now"
                    >
                      Choose Now
                    </Link>
                  </div>
                </div>
              )
          )}
          {/* Price Table Boxes */}
        </div>
      </div>
      {/* Price Table Wrap */}
    </section>
  );
};

export default PriceTable;
