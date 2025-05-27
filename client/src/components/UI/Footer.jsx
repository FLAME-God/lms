import { Facebook ,Twitter,Instagram,Youtube,Linkedin} from 'lucide-react'
import React from 'react'

function Footer() {
  return (
          <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Byway</h3>
              <p className="mb-4">Learn in-demand skills from expert instructors. Start your journey today.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white"><Youtube size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Students</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">My Account</a></li>
                <li><a href="#" className="hover:text-white">Courses </a></li>
                <li><a href="#" className="hover:text-white">Career </a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Instructors</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Become an Instructor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Byway. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer