import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({
    label,
    name,
    register,
    error,
    placeholder = "Enter password",
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-1">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-slate-700"
            >
                {label}
            </label>

            <div className="relative">
                <input
                id={name}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                {...register(name)}
                className={`w-full rounded-lg border px-4 py-2 pr-11 outline-none transition
                ${
                    error
                    ? "border-red-500 focus:ring-2 focus:ring-red-400"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                }`}
                />

                <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700"
                >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
            </div>

            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
    );
}

export default PasswordInput;
