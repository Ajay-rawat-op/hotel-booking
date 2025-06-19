import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header/header";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // useNavigate does NOT take a default path here, so call without args
  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- Validate fields before submitting ---
    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please fill in all fields.");
      return; // stop further execution
    }

    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", formData);

      if (res.status === 200) {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token); // in case you use it for auth later
        alert("Login successful!");
        navigate("/profile"); // go to profile page
      }

    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || "Login failed";

      console.error("Login error:", message);

      if (status === 401) {
        alert("Invalid credential!!");
      } else if (status === 404) {
        const confirmRedirect = window.confirm(
          "User not found. Please sign up to create an account."
        );

        if (confirmRedirect) {
          navigate("/signUp");
        } else {
          // Stay on login page
          console.log("User chose to remain on the login page.");
        }
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-yellow-100">
        {/* Left Side - Image Section */}
        <div className="hidden md:flex w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxury Hotel"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-white bg-opacity-10 flex items-center justify-center">
            <h2 className="text-aqua-700 text-5xl font-bold font-satisfy text-center px-4">
              Relax in Style and Comfort
            </h2>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-10 bg-white">
          <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
            Welcome Back
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?
            <Link
              to="/signUp"
              className="ml-2 inline-block text-black bg-white-500 hover:bg-yellow-600 hover:text-white px-4 py-1 rounded-full font-medium shadow transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
