import { partners } from "../../data/partners";
import { SectionTitleSimple } from "../SectionTitles";

const Partners2 = () => {
  return (
    <section className="partWrap py-[5rem] sm:py-[5.5rem] md:py-[6.25rem] relative w-full">
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitleSimple title="Companies I'm Working With"></SectionTitleSimple>
        <div className="partList grid gap-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 place-items-center place-content-center w-full">
          {partners.map(
            (item, index) =>
              index < 5 && (
                <div
                  className="partBox group overflow-hidden text-center relative w-100"
                  key={index}
                >
                  <a className="inline-block overflow-hidden relative" href={item.partLink} title="Partner">
                    <img
                      className="group-hover:-translate-y-full group-hover:opacity-0 transition-all ease-in-out duration-200"
                      src={item.partImg}
                      alt="Partner"
                    ></img>
                    <img
                      className="translate-y-full opacity-0 absolute top-0 left-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-200"
                      src={item.partHoverImg}
                      alt="Partner"
                    ></img>
                  </a>
                  {/* Partner Box */}
                </div>
              )
          )}
          {/* Partners List */}
        </div>
      </div>
      {/* Partners Wrap */}
    </section>
  );
};

export default Partners2;
