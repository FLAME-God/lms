import { useState } from 'react';
import { Eye, EyeOff, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TeacherSignin() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    expertise: '',
    experience: '',
    qualification: '',
    about: '',
    totalStudents: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.expertise.trim()) errors.expertise = 'Expertise is required';
    if (!formData.experience.trim()) errors.experience = 'Experience is required';
    if (!formData.qualification.trim()) errors.qualification = 'Qualification is required';
    if (!formData.about.trim()) errors.about = 'About information is required';
    if (!formData.accountNumber.trim()) errors.accountNumber = 'Account number is required';
    if (!formData.ifscCode.trim()) errors.ifscCode = 'IFSC code is required';
    if (!formData.bankName.trim()) errors.bankName = 'Bank name is required';
    if (!formData.branchName.trim()) errors.branchName = 'Branch name is required';
    if (!imagePreview) errors.image = 'Profile image is required';

    return errors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validateForm();

  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  setIsSubmitting(true);

  try {
    const formPayload = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput?.files[0];

    if (!file) {
      throw new Error("File is required.");
    }

    // Required image field for Cloudinary middleware
    formPayload.append('file', file);

    // User fields
    formPayload.append('fullName', formData.fullName);
    formPayload.append('email', formData.email);
    formPayload.append('password', formData.password);
    formPayload.append('phone', '0000000000'); // Dummy or actual phone
    formPayload.append('role', 'TEACHER');

    // Teacher fields
    formPayload.append('expertise', formData.expertise);
    formPayload.append('experience', formData.experience);
    formPayload.append('qualification', formData.qualification);
    formPayload.append('about', formData.about);
    formPayload.append('totalStudent', formData.totalStudents);
    formPayload.append('accountNumber', formData.accountNumber);
    formPayload.append('ifscCode', formData.ifscCode);
    formPayload.append('bankName', formData.bankName);
    formPayload.append('branchName', formData.branchName);

    const response = await axios.post('http://localhost:8080/api/v1/teacher/signup', formPayload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Signup Success:', response.data);
    navigate('/login');
  } catch (err) {
    console.error('Signup Error:', err.response?.data || err.message);
    alert(err.response?.data?.error || 'Signup failed');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left Panel */}
          <div className="p-8 md:p-12 bg-blue-700 md:w-1/3 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Teaching Team</h2>
              <p className="mb-8">
                Share your knowledge and expertise with students around the world. Complete your profile to get started.
              </p>
            </div>
            <p className="text-sm hidden md:block">
              * All fields are required to complete your teaching profile
            </p>
          </div>

          {/* Form Panel */}
          <div className="p-8 md:p-12 md:w-2/3">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Teacher Registration</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`mt-1 block w-full rounded-md border ${
                        formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                      } px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {formErrors.fullName && <p className="text-red-600 text-sm mt-1">{formErrors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-1 block w-full rounded-md border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      } px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password *</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border ${
                          formErrors.password ? 'border-red-500' : 'border-gray-300'
                        } pr-10 px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-2.5 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {formErrors.password && <p className="text-red-600 text-sm mt-1">{formErrors.password}</p>}
                  </div>

                  {/* Profile Picture */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Picture *</label>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="w-16 h-16 rounded-full overflow-hidden border bg-gray-100">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-400">
                            <Upload />
                          </div>
                        )}
                      </div>
                      <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium bg-white hover:bg-gray-50">
                        Upload
                        <input type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
                      </label>
                    </div>
                    {formErrors.image && <p className="text-red-600 text-sm mt-1">{formErrors.image}</p>}
                  </div>
                </div>
              </div>

              {/* Professional Info */}
              <div className="space-y-4 pt-4">
                <h2 className="text-lg font-semibold text-gray-700">Professional Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'expertise', label: 'Expertise/Subject *' },
                    { name: 'experience', label: 'Years of Experience *' },
                    { name: 'qualification', label: 'Qualification *' },
                    { name: 'totalStudents', label: 'Total Students Taught', type: 'number' }
                  ].map(({ name, label, type = 'text' }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full rounded-md border ${
                          formErrors[name] ? 'border-red-500' : 'border-gray-300'
                        } px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      />
                      {formErrors[name] && <p className="text-red-600 text-sm mt-1">{formErrors[name]}</p>}
                    </div>
                  ))}
                </div>

                {/* About */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">About Yourself *</label>
                  <textarea
                    name="about"
                    rows="4"
                    value={formData.about}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      formErrors.about ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {formErrors.about && <p className="text-red-600 text-sm mt-1">{formErrors.about}</p>}
                </div>
              </div>

              {/* Banking Info */}
              <div className="space-y-4  pt-4">
                <h2 className="text-lg font-semibold text-gray-700">Banking Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'accountNumber', label: 'Account Number *' },
                    { name: 'ifscCode', label: 'IFSC Code *' },
                    { name: 'bankName', label: 'Bank Name *' },
                    { name: 'branchName', label: 'Branch Name *' }
                  ].map(({ name, label }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700">{label}</label>
                      <input
                        name={name}
                        value={formData[name]}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full rounded-md border ${
                          formErrors[name] ? 'border-red-500' : 'border-gray-300'
                        } px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      />
                      {formErrors[name] && <p className="text-red-600 text-sm mt-1">{formErrors[name]}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
