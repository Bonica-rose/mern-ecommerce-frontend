const Result = ({ page = 1, limit = 12, total = 0, label = "Products" }) => {
    if (total === 0) return null;

    const start = (page - 1) * limit + 1;
    const end = Math.min(page * limit, total);

    return (
        <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold">
                {start}-{end}
            </span>{" "}
            of <span className="font-semibold">{total}</span> {label}
        </p>
    );
}

export default Result;
