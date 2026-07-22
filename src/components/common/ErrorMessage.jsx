import { FiAlertCircle } from "react-icons/fi";

const ErrorMessage = ({ message = "Something went wrong.", className = "" }) => {
    if (!message) return null;

    return (
        <div
        className={`m-3 flex items-start gap-3 rounded border border-red-200 bg-red-50 p-4 text-red-700 ${className}`}
        role="alert"
        >
        <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

        <p className="text-sm font-medium">{message}</p>
        </div>
    );
}

export default ErrorMessage;
