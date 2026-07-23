const SORT_OPTIONS = [
  {
    value: "latest",
    label: "Newest",
  },
  {
      value: "rating",
      label: "High ratings",
  },
  {
    value: "price_asc",
    label: "Price: Low → High",
  },
  {
    value: "price_desc",
    label: "Price: High → Low",
  },
  {
    value: "name",
    label: "Name: A-Z",
  }
];

const SortDropdown = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border border-gray-300 px-4 py-2"
    >
      {SORT_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;
