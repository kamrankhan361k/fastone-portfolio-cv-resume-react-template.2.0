import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import { funFacts } from "../../data/fun-facts";

const FunFacts3 = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="funFactsWrap py-[5rem] md:py-[5.625rem] relative w-full">
      <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="funFactBoxes relative w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
              {funFacts.map(
                (item, index) =>
                  index < 4 && (
                    <div
                      className="factBox text-center flex flex-col items-center justify-center p-5 w-full relative z-[1] min-h-[11rem] sm:min-h-[15rem]"
                      key={index}
                    >
                      <div
                        className="expBoxBg before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                        style={{ backgroundImage: `url(${PatternImg2})` }}
                      ></div>
                      <span>{item.factIcon}</span>
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={item.factCount}
                          duration={4}
                          className="font-Poppins font-bold text-accent2 text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-none mt-3"
                        ></CountUp>
                      )}
                      <h5 className="text-desc2 font-NunitoSans font-bold text-[1rem] md:text-[1.125rem] leading-none mt-3">
                        {item.factCap}
                      </h5>
                    </div>
                  )
              )}
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default FunFacts3;
