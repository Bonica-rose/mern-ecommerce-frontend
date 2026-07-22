const CategoryDropdown = ({ categories = [], value, onChange }) => {
    return (
        <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-gray-300 px-4 py-2"
        >
        <option value="">All Categories</option>

        {categories.map((category) => (
            <option key={category} value={category}>
            {category}
            </option>
        ))}
        </select>
    );
}

export default CategoryDropdown;
