"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function validateForm() {
    const newErrors = { name: "", email: "", password: "", confirmPassword: "" };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

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

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      toast.success("Registration successful!");
      
      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (error) {
      toast.error("Server error! Please try again later.");
      console.error("Registration error:", error);
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

          <h2 className="text-2xl font-semibold mt-6 bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-gray-400">Join us today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.name 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-700 focus:ring-orange-500 focus:border-orange-500"
              } text-white placeholder-gray-400`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

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
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
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

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.confirmPassword 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-gray-700 focus:ring-orange-500 focus:border-orange-500"
              } text-white placeholder-gray-400`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-linear-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                Creating Account...
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        <div className="space-y-3">
            <button
            type="button"
            className="w-full py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-3 border border-gray-700 shadow-lg hover:shadow-xl"
            >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
            </button>
        </div>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link 
            href="/login" 
            className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}