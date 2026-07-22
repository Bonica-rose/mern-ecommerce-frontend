import SearchInput from "./SearchInput";
import CategoryDropdown from "./CategoryDropdown";
import SortDropdown from "./SortDropdown";

const FilterBar = ({
  search,
  category,
  sort,
  categories,
  onSearch,
  onCategory,
  onSort,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">
      <div className="flex-1">
        <SearchInput
          value={search}
          onChange={onSearch}
          placeholder="Search products..."
        />
      </div>

      <CategoryDropdown
        categories={categories}
        value={category}
        onChange={onCategory}
      />

      <SortDropdown value={sort} onChange={onSort} />
    </div>
  );
}

export default FilterBar;
