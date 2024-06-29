import { conInfo2 } from "../../data/contact-info2";

const ContactInfo2 = () => {
  return (
    <div className="conInfoList grid gap-[1.75rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative w-full">
      {conInfo2.map(
        (item, index) =>
          index < 3 && (
            <div
              className="conInfoBox border-[1px] border-dashed border-white flex gap-[1.0625rem] items-center w-full rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] lg:px-10 md:px-8 px-5 py-[1.75rem]"
              key={index}
            >
              <span>{item.conIcon}</span>
              <div className="conInfoInner flex flex-col gap-1">
                <h4 className="text-white font-Poppins font-bold text-[1.25rem] uppercase">
                  {item.conTitle}
                </h4>
                <p className="text-desc text-[1rem] md:text-[1.125rem] font-NunitoSans font-semibold">
                  {item.conCap}
                </p>
              </div>
              {/* Contact Info Box */}
            </div>
          )
      )}
      {/* Contact Info List */}
    </div>
  );
};

export default ContactInfo2;
