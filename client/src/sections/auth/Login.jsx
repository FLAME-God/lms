import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/clientImage/login.jpg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/user/signin",
          formData
        );

        const { token, message, user } = response.data;
          localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setSuccessMessage(message || 'Logged in successfully!');
      setSubmitError('');

      setTimeout(() => {
        setSuccessMessage('');

        // Role-based redirection
        if (user.role === 'TEACHER') {
          navigate('/dashboard');
        } else {
          navigate('/courses');
        }
      }, 1500);
        // 🔐 Store token in localStorage
        localStorage.setItem("token", token);

        setSuccessMessage(message || "Logged in successfully!");
      } catch (error) {
        console.error("Login error:", error);

        // Handle backend errors
        const errorMessage =
          error.response?.data?.error ||
          "Something went wrong. Please try again.";
        setSubmitError(errorMessage);

        setTimeout(() => setSubmitError(""), 3000);
      }
    } else {
      setSubmitError("Please fix the errors before submitting.");
      setTimeout(() => setSubmitError(""), 3000);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      {/* Left Image Side */}
      <div className="hidden md:block">
        <img
          src={login}
          alt="Login"
          className="w-full h-[500px] px-4 object-cover"
        />
      </div>

      {/* Right Form Side */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sign in to your account
          </h2>

          {/* Success popup */}
          {successMessage && (
            <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
              {successMessage}
            </div>
          )}

          {/* Error popup */}
          {submitError && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>

          <div className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
