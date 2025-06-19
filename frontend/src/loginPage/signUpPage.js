import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import Header from "../header/header";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();  // For navigation after successful signup

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/auth/signup", {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 200) {
        alert("Account created successfully!");

        // Clear form fields by resetting state
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        // Set the form submission flag to show success message
        setIsFormSubmitted(true);

        // Optionally, redirect to the login page after a brief delay
        setTimeout(() => {
          navigate("/loginPage"); // Redirect to login page
        }, 2000); // Delay before redirecting (optional)
      }
    } catch (error) {
      console.error(error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white">
      <Header/>
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-yellow-100">

        {/* Left Side - Image Section */}
        <div className="hidden md:flex w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/2740955/pexels-photo-2740955.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxury Stay"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-white bg-opacity-10 flex items-center justify-center">
            <h2 className="text-aqua-300 text-5xl font-bold font-satisfy text-center px-4">
              Join the Experience
            </h2>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 p-10 bg-white">
          {isFormSubmitted ? (
            // Show success message after successful submission
            <div className="flex items-center justify-center p-5 bg-green-100 text-green-600 font-semibold text-lg rounded-xl shadow-lg max-w-md mx-auto my-8 space-x-3 animate__animated animate__fadeIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p>Your account has been created successfully!</p>
                <p className="text-sm">Redirecting to login...</p>
              </div>
            </div>

          ) : (
            <>
              <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
                Create Your Account
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

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

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition duration-300 capitalize"
                >
                  Sign Up
                </button>
              </form>

              <div className="text-center text-sm text-gray-600 mt-6">
                Already have an account?
                <Link
                  to="/loginPage"
                  className="ml-2 inline-block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-1 rounded-full font-medium shadow transition duration-300"
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
