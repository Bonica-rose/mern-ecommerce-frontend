const SORT_OPTIONS = [
    {
        value: "",
        label: "Default",
    },
    {
        value: "newest",
        label: "Newest",
    },
    {
        value: "priceAsc",
        label: "Price: Low → High",
    },
    {
        value: "priceDesc",
        label: "Price: High → Low",
    },
    {
        value: "nameAsc",
        label: "Name: A-Z",
    },
    {
        value: "nameDesc",
        label: "Name: Z-A",
    },
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
}

export default SortDropdown;
