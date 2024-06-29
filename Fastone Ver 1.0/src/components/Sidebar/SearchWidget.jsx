import { FiSearch } from "react-icons/fi";

const SearchWidget = () => {
  return (
    <div className="widgetBox relative w-full">
      <form className="relative w-full">
        <input
          className="h-[3.125rem] md:h-[4.0625rem] w-full rounded-[5px] md:rounded-[10px] border-[1px] border-solid border-[#c2ccda] text-[1rem] font-NunitoSans font-semibold px-5 md:px-[2.1875rem]"
          type="search"
          placeholder="Enter your keyword..."
        ></input>
        <button
          type="submit"
          className="flex items-center justify-center bg-accent text-white hover:bg-accent2 hover:text-white w-[3.4375rem] absolute right-0 text-center top-0 bottom-0 rounded-r-[5px] md:rounded-r-[10px]"
        >
          <FiSearch size={20}></FiSearch>
        </button>
      </form>
      {/* Widget Box */}
    </div>
  );
};

export default SearchWidget;
