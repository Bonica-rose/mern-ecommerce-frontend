import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiUser } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import PasswordInput from "../../components/PasswordInput";

import { register as registerUser } from "../../features/auth/authThunks";
import { registerSchema } from "../../schemas/authSchema";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    delete data.confirmPassword;

    const result = await dispatch(registerUser(data));

    if (registerUser.fulfilled.match(result)) {
      navigate("/login");
    }
  };

  return (
    <div className="py-9 flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}

          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>

            <div className="relative">
              <FiUser className="absolute left-3 top-3.5 text-slate-500" />

              <input
                type="text"
                placeholder="Enter name"
                {...register("name")}
                className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-3 outline-none focus:border-blue-500"
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>

            <div className="relative">
              <FiMail className="absolute left-3 top-3.5 text-slate-500" />

              <input
                type="email"
                placeholder="Enter email"
                {...register("email")}
                className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-3 outline-none focus:border-blue-500"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <PasswordInput
            label="Password"
            name="password"
            register={register}
            error={errors.password}
            placeholder="Enter password"
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            placeholder="Confirm password"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
