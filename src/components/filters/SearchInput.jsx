const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
    return (
        <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default SearchInput;
