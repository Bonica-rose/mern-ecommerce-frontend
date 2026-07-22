const Pagination = ({ page, pages, onPageChange }) => {
    if (pages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
        <button
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
            className="px-3 py-2 border rounded disabled:opacity-50"
        >
            Previous
        </button>

        {Array.from({ length: pages }, (_, index) => (
            <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-2 rounded ${
                page === index + 1 ? "bg-blue-600 text-white" : "border"
            }`}
            >
            {index + 1}
            </button>
        ))}

        <button
            disabled={page === pages}
            onClick={() => onPageChange(page + 1)}
            className="px-3 py-2 border rounded disabled:opacity-50"
        >
            Next
        </button>
        </div>
    );
}

export default Pagination;
