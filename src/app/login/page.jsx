"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function validateForm() {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!form.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Invalid Credentials");
        setLoading(false);
        return;
      }

      toast.success("Login successful!");
      
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    } catch (error) {
      toast.error("Server error! Please try again later.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 py-8">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-wide">
            <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              FoodHub
            </span>  
          </h1>

          <p className="text-gray-400 mt-3 text-sm">
            The ultimate food ordering & management platform
          </p>

          <h2 className="text-2xl font-semibold mt-4 bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.email 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-700 focus:ring-orange-500 focus:border-orange-500"
              } text-white placeholder-gray-400`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <Link 
                href="/forgot-password" 
                className="text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.password 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-700 focus:ring-orange-500 focus:border-orange-500"
              } text-white placeholder-gray-400`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-linear-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Social Login Options */}
        <div className="space-y-3">
<button
  type="button"
  className="w-full py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-3 border border-gray-700 shadow-lg hover:shadow-xl"
>
  <FcGoogle className="w-5 h-5" />
  Continue with Google
</button>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-400 mt-8">
          Don&apos;t have an account?{" "}
          <Link 
            href="/register" 
            className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200 hover:underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}