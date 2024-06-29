import CategoriesWidget from "./CategoriesWidget";
import FreelanceWorkWidget from "./FreelanceWorkWidget";
import SearchWidget from "./SearchWidget";
import TagsWidget from "./TagsWidget";

const Sidebar2 = () => {
  return (
    <aside className="flex flex-col gap-[1.875rem] w-full">
      <SearchWidget></SearchWidget>
      <CategoriesWidget></CategoriesWidget>
      <TagsWidget></TagsWidget>
      <FreelanceWorkWidget></FreelanceWorkWidget>
    </aside>
  );
};

export default Sidebar2;
