import { FiMinus, FiPlus } from "react-icons/fi";

const QuantitySelector = ({
    quantity,
    onIncrease,
    onDecrease,
    loading = false,
}) => {
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={onDecrease}
                disabled={loading || quantity <= 1}
                className="rounded border px-2 py-1 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <FiMinus />
            </button>

            <span className="min-w-8 text-center font-medium">{quantity}</span>

            <button
                onClick={onIncrease}
                disabled={loading}
                className="rounded border px-2 py-1 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <FiPlus />
            </button>
        </div>
    );
}

export default QuantitySelector;
