import { useEffect, useState } from "react";

const SearchInput = ({ value, onChange, placeholder }) => {
    const [searchValue, setSearchValue] = useState(value);

    // Keep local state in sync if Redux changes externally
    useEffect(() => {
        setSearchValue(value);
    }, [value]);

    // Debounce
    useEffect(() => {
        const timer = setTimeout(() => {
        onChange(searchValue);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchValue, onChange]);

    return (
        <input
            type="text"
            value={searchValue}
            placeholder={placeholder}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
}

export default SearchInput;
