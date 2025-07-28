"use client";

import { sonarId } from "@/components/utils/functions/sonarId";
import { verifyToken } from "@/components/utils/functions/verifyToken";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { setTokenAction } from "@/components/utils/hook/AuthService/SetUser";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useLoginMutation();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    toast.loading("Loginging", { id: sonarId });
    const res = await login(data).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      const adminToken = res?.data?.token;
      console.log("Admin Token: ", adminToken);
      await setTokenAction(adminToken);
      toast.success("Login Successfully", { id: sonarId });
      //   const admin = verifyToken(res?.data?.token);
      //   //   console.log("Admin: ", admin);
      //   dispatch(setAdmin({ user: admin, token: res?.data?.token }));
      //   toast.success("Login Successfully", { id: sonarId });
      // router.push(`/${admin?.role}-dashboard`);
      router.push(`/admin-dashboard`);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f1f1f] px-4">
      <div className="bg-[#2c2c2c] p-8 rounded-xl shadow-md w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 fontHeading">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 fontBody">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className={`w-full px-4 py-2 bg-[#1f1f1f] border ${
                errors.email ? "border-red-500" : "border-[#525252]"
              } rounded-md focus:outline-none`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                })}
                className={`w-full px-4 py-2 bg-[#1f1f1f] border ${
                  errors.password ? "border-red-500" : "border-[#525252]"
                } rounded-md pr-10`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 hover:text-white"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#141414] border border-[#525252] hover:bg-[#1D1B1B] hover:border-white transition-all py-2 rounded-md fontHeading"
          >
            Login
          </button>

          {/* Link */}
          <p className="text-sm mt-4 text-center">
            Don`t have an account?
            <Link
              href="/registration"
              className="text-blue-400 hover:underline font-semibold"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
