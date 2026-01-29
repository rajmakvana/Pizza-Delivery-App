import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import api from "../services/api.js";
import { useContext } from "react";
import AuthContext from "../context/authContext.jsx";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

   const {AuthUser} = useContext(AuthContext);

  const handleFormSubmit = async (data) => {
     try {
      const response = await api.post(
        "/auth/login",
        {
            email: data.email,
            password: data.password,
        }
      );
      console.log(response)
      await AuthUser(response.data);
      reset();
      navigate("/");
      toast.success("Login successful! Order now.");

    } catch (error) {
      toast.error(error.response?.data.message || "Registration failed.");
      reset();
    }
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <div class="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 class="text-2xl font-bold text-center text-[#FE5F1E] mb-6">
          Login
        </h2>

        <form class="space-y-5" onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm
    focus:outline-none focus:ring-[#FE5F1E] focus:border-[#FE5F1E] w-full"
              
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email?.message}</span>}
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`px-3 py-2 border border-gray-300 rounded-md shadow-sm
    focus:outline-none focus:ring-[#FE5F1E] focus:border-[#FE5F1E] w-full ${errors.password ? 'border-red-700' : ''}`}
              required
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password?.message}</span>}
          </div>

          <button
            type="submit"
            class="w-full bg-[#FE5F1E] text-white py-2 rounded-lg font-semibold hover:bg-[#d2511e] transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p class="text-center text-sm text-gray-600 mt-5">
          Don’t have an account? &nbsp;
          <span
            onClick={() => navigate("/register")}
            className="text-[#FE5F1E] underline"
          >
            signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
