import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch, useSelector } from "react-redux";

import { login } from "../../features/auth/authThunks";
import { loginSchema } from "../../schemas/authSchema";

import PasswordInput from "../../components/PasswordInput";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  console.log(redirect)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(login(data)).unwrap();
      navigate(redirect);
    } catch (error) {}

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {redirect === "/checkout" && (
            <div className="my-4 rounded-md border border-yellow-300 bg-yellow-50 p-3 text-yellow-800">
              Please log in to continue to checkout.
            </div>
          )}

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

          {/* Password */}

          <PasswordInput
            label="Password"
            name="password"
            register={register}
            error={errors.password}
            placeholder="Enter password"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-blue-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
