import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import signup from "../../assets/clientImage/signup.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.phone) newErrors.phone = 'Phone number is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            setSubmitError('');
            setSuccessMessage('');

            try {
                const response = await axios.post('http://localhost:8080/api/v1/student/signup', {
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                    phone: formData.phone,
                    role: "STUDENT"
                });

                console.log('API response:', response.data);
                setSuccessMessage('Account created successfully!');
                setFormData({
                    fullName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phone: ''
                });

                setTimeout(() => {
                    setSuccessMessage('');
                    navigate("/login");
                }, 3000);
            } catch (error) {
                console.error(error);
                setSubmitError(error.response?.data?.message || 'Registration failed. Please try again.');
                setTimeout(() => {
                    setSubmitError('');
                }, 3000);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setSubmitError('Please fix the errors before submitting.');
            setTimeout(() => {
                setSubmitError('');
            }, 3000);
        }
    };

    return (
        <main className="flex-grow">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-center bg-cover hidden md:block">
                    <img
                        src={signup}
                        alt="signup"
                        className="w-full h-[500px] px-4 object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Your Account</h1>

                        {successMessage && (
                            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded transition-all duration-300">
                                {successMessage}
                            </div>
                        )}

                        {submitError && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded transition-all duration-300">
                                {submitError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.fullName && (
                                    <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                                )}
                            </div>

                            <div className="flex space-x-4 mb-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                    />
                                    {errors.password && (
                                        <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-gray-900 text-white w-full py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-4"
                            >
                                <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
                                {!isSubmitting && <ArrowRight size={16} />}
                            </button>
                        </form>

                        <div className="mt-6 flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-sm text-gray-500">Already have an account</span>
                            <div className="flex-grow border-t border-gray-300">
                                <Link to="/login">
                                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150">
                                        Log in
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signin;
