import { useState } from 'react';
import { Search, ChevronDown, Image } from 'lucide-react';

export default function ProfilePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [activeTab, setActiveTab] = useState('Profile');
  
  const handleImageUpload = () => {
    // Implement image upload functionality
    console.log('Image upload clicked');
  };

  const handleSaveImage = () => {
    // Implement save image functionality
    console.log('Save image clicked');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="flex items-center">
          <div className="mr-4">
            <img src="/api/placeholder/50/50" alt="Byway Logo" className="h-8" />
          </div>
          <span className="text-lg font-medium">Byway</span>
          <button className="ml-6 px-2 py-1 text-sm">Categories</button>
        </div>
        
        <div className="relative flex-1 mx-4 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search courses"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="flex items-center">
          <button className="px-3 py-1 text-sm">Teach on Byway</button>
          <button className="ml-2 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="ml-2 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button className="ml-2 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="ml-2 h-8 w-8 rounded-full bg-blue-800 text-white flex items-center justify-center">
            J
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-row px-4 py-6 max-w-6xl mx-auto w-full">
        {/* Left Sidebar */}
        <div className="w-64 pr-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
              <img src="/api/placeholder/100/100" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-medium text-lg">John Doe</h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <span>Score Points</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <button 
              className={`w-full py-2 px-3 text-left rounded ${activeTab === 'Profile' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('Profile')}
            >
              Profile
            </button>
            <button 
              className={`w-full py-2 px-3 text-left rounded ${activeTab === 'My Courses' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('My Courses')}
            >
              My Courses
            </button>
            <button 
              className={`w-full py-2 px-3 text-left rounded ${activeTab === 'Teachers' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('Teachers')}
            >
              Teachers
            </button>
            <button 
              className={`w-full py-2 px-3 text-left rounded ${activeTab === 'Messages' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('Messages')}
            >
              Messages
            </button>
            <button 
              className={`w-full py-2 px-3 text-left rounded ${activeTab === 'My Reviews' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('My Reviews')}
            >
              My Reviews
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Profile Form */}
          {activeTab === 'Profile' && (
            <div className="bg-white">
              <div className="grid grid-cols-2 gap-6">
                {/* First Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Label"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                
                {/* Last Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Label"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                
                {/* Headline */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                  <input
                    type="text"
                    placeholder="Label"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                
                {/* Language */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Label"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={selectedLanguage}
                      readOnly
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="mb-4 col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    placeholder="Label"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={3}
                  />
                </div>
                
                {/* Image Preview */}
                <div className="mb-4 col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image Preview</label>
                  <div className="border border-gray-200 bg-gray-100 rounded flex items-center justify-center h-20 w-32">
                    <Image size={24} className="text-gray-400" />
                  </div>
                </div>
                
                {/* Add/Change Image */}
                <div className="mb-4 col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Add/Change Image</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Label"
                      className="flex-1 p-2 border border-gray-300 rounded-l"
                      readOnly
                    />
                    <button
                      onClick={handleImageUpload}
                      className="bg-white border border-gray-300 border-l-0 rounded-r px-4 py-2"
                    >
                      Upload Image
                    </button>
                  </div>
                  <button
                    onClick={handleSaveImage}
                    className="mt-2 bg-gray-900 text-white px-4 py-2 rounded text-sm"
                  >
                    Save Image
                  </button>
                </div>
                
                {/* Links Section */}
                <div className="col-span-2 mt-4">
                  <h3 className="font-medium mb-4">Links</h3>
                  
                  <div className="space-y-4">
                    {/* Website */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Website</label>
                      <input
                        type="text"
                        placeholder="Label"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    
                    {/* Behance/Dribbble */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Behance/Dribbble</label>
                      <input
                        type="text"
                        placeholder="Label"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    
                    {/* LinkedIn */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">LinkedIn</label>
                      <input
                        type="text"
                        placeholder="Label"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    
                    {/* YouTube */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">YouTube</label>
                      <input
                        type="text"
                        placeholder="Label"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    
                    {/* Facebook */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Facebook</label>
                      <input
                        type="text"
                        placeholder="Label"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Other tabs would be implemented here */}
          {activeTab !== 'Profile' && (
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-medium mb-4">{activeTab}</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-12">
        <div className="flex flex-col md:flex-row">
          {/* Company Info */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/40/40" alt="Byway Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold">Byway</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Empowering learners through accessible and engaging online education.
            </p>
            <p className="text-sm text-gray-400">
              Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.
            </p>
          </div>
          
          {/* Get Help */}
          <div className="md:w-1/4 mb-6 md:mb-0 md:px-6">
            <h3 className="font-bold mb-4">Get Help</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Contact Us</li>
              <li>Latest Articles</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          {/* Programs */}
          <div className="md:w-1/4 mb-6 md:mb-0 md:px-6">
            <h3 className="font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Art & Design</li>
              <li>Business</li>
              <li>IT & Software</li>
              <li>Languages</li>
              <li>Programming</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Address: 123 Main Street, Anytown, CA 12345</li>
              <li>Tel: +(123) 456-7890</li>
              <li>Mail: byway@dummyemail.io</li>
            </ul>
            
            {/* Social Media */}
            <div className="flex mt-4 space-x-3">
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded-full">
                <span className="sr-only">GitHub</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-red-500 p-2 rounded-full">
                <span className="sr-only">Google</span>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full">
                <span className="sr-only">Microsoft</span>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="currentColor">
                  <path d="M0 0h11v11H0V0zm12 0h11v11H12V0zM0 12h11v11H0V12zm12 0h11v11H12V12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}