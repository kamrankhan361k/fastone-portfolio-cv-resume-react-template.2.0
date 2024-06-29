import CategoriesWidget from "./CategoriesWidget";
import SearchWidget from "./SearchWidget";
import TagsWidget from "./TagsWidget";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-[1.875rem] w-full">
      <SearchWidget></SearchWidget>
      <CategoriesWidget></CategoriesWidget>
      <TagsWidget></TagsWidget>
    </aside>
  );
};

export default Sidebar;
