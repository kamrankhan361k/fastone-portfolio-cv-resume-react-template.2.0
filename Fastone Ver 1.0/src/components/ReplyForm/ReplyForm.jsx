const ReplyForm = () => {
  return (
    <section className="replyFormWrap py-[5rem] md:py-[5.5rem] lg:py-[6.875rem] relative w-100">
      <div className="container sm:container md:container lg:max-w-[48.125rem] mx-auto">
        <h3 className="text-[1.5rem] md:text-[1.875rem] font-Poppins font-bold text-accent2 text-center mb-[.9375rem]">Leave A Comment</h3>
        <form className="grid gap-[10px] lg:grid-cols-2 grid-cols-1">
          <div className="fieldBox w-full">
            <input
              type="text"
              className="focus:outline-0 bg-gray rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.125rem] lg:h-[3.75rem] p-[.9375rem] md:p-x[1.25rem] lg:px-[1.875rem] text-desc2 text-[1rem] font-NunitoSans font-semibold" placeholder="Your Name"
            ></input>
          </div>
          <div className="fieldBox w-full">
            <input
              type="email"
              className="focus:outline-0 bg-gray rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.125rem] lg:h-[3.75rem] p-[.9375rem] md:p-[1.25rem] lg:p-[1.875rem] text-desc2 text-[1rem] font-NunitoSans font-semibold" placeholder="Your Email"
            ></input>
          </div>
          <div className="fieldBox w-full col-span-2">
            <textarea className="focus:outline-0 bg-gray rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[8rem] md:h-[10rem] lg:h-[11.25rem] p-[.9375rem] md:p-[1.25rem] lg:p-[1.875rem] text-desc2 block text-[1rem] font-NunitoSans font-semibold" placeholder="Message"></textarea>
          </div>
          <div className="fieldbtn mt-[.9375rem] w-full col-span-2 text-center">
            <button
              className="bg-accent text-white text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent2 hover:text-white text-center inline-block"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {/* Reply Form Wrap */}
    </section>
  );
};

export default ReplyForm;
