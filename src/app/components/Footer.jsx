"use client";
import Link from "next/link";
import { FaFacebookF,  FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-orange-50 to-amber-50 border-t border-orange-200">
      {/* Main Footer Content */}
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Link href="/">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-2xl font-bold bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  FoodHub
                </span>
              </Link>           </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Discover the finest restaurants and cuisines in your city. Order your favorite meals with just a few clicks.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-black  rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                <FaFacebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-black  rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                <FaXTwitter size={14} />
              
              </a>
              <a href="#" className="w-8 h-8 bg-black  rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Restaurants', 'Deals', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Italian', 'Chinese', 'Mexican', 'Indian', 'Fast Food'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start">
                <span className="mr-2">
                    <IoLocationSharp></IoLocationSharp>
                    </span>
                <span>123 Food Street, Culinary City</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">

                    <IoCall/>
                </span>
                <span>+8801743870639</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">

                    <MdEmail />

                </span>
                <span>Shoyaib105@gmail.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} FoodHub. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-2 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-orange-500 text-xs transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
