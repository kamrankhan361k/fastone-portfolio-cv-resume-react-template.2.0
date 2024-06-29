import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <div className="pagWrap flex justify-start w-full">
      <ul className="inline-flex text-center items-center gap-[3px]">
        <li className="mr-3">
          <Link
            to="#"
            className="bg-accent2 text-white hover:bg-accent hover:text-white leading-none flex items-center justify-center rounded-[5px] md:rounded-[10px] h-[2.75rem] w-[2.75rem] md:h-[4.375rem] md:w-[4.375rem]"
            title="Previous"
          >
            <FiChevronLeft size={23}></FiChevronLeft>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="h-[2.75rem] w-[2.2rem] md:h-[3rem] md:w-[2.5rem] leading-none border-[1px] border-solid border-[#d6c0ec] hover:border-accent hover:bg-accent hover:text-white rounded-[5.4px] text-[1.0625rem] font-Poppins font-bold flex items-center justify-center"
          >
            1
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="h-[2.75rem] w-[2.2rem] md:h-[3rem] md:w-[2.5rem] leading-none border-[1px] border-solid border-[#d6c0ec] hover:border-accent hover:bg-accent hover:text-white rounded-[5.4px] text-[1.0625rem] font-Poppins font-bold flex items-center justify-center"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="h-[2.75rem] w-[2.2rem] md:h-[3rem] md:w-[2.5rem] leading-none border-[1px] border-solid border-[#d6c0ec] hover:border-accent hover:bg-accent hover:text-white rounded-[5.4px] text-[1.0625rem] font-Poppins font-bold flex items-center justify-center"
          >
            3
          </Link>
        </li>
        <li className="text-[#647c9e] text-[1.5rem] font-Poppins px-[14px]">
          ....
        </li>
        <li>
          <Link
            to="#"
            className="h-[2.75rem] w-[2.2rem] md:h-[3rem] md:w-[2.5rem] leading-none border-[1px] border-solid border-[#d6c0ec] hover:border-accent hover:bg-accent hover:text-white rounded-[5.4px] text-[1.0625rem] font-Poppins font-bold flex items-center justify-center"
          >
            12
          </Link>
        </li>
        <li className="ml-3">
          <Link
            to="#"
            className="bg-accent2 text-white hover:bg-accent hover:text-white leading-none flex items-center justify-center rounded-[5px] md:rounded-[10px] h-[2.75rem] w-[2.75rem] md:h-[4.375rem] md:w-[4.375rem]"
            title="Next"
          >
            <FiChevronRight size={23}></FiChevronRight>
          </Link>
        </li>
      </ul>
      {/* Pagination Wrap */}
    </div>
  );
};

export default Pagination;
