"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const loggedIn = false; 

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-linear-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                FoodHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50 flex items-center space-x-1"
            >
             
              <span>Home</span>
            </Link>
            
            <Link 
              href="/menu" 
              className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50 flex items-center space-x-1"
            >
              
              <span>Menu</span>
            </Link>
            
            <Link 
              href="/add-product" 
              className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50 flex items-center space-x-1"
            >
              
              <span>Add Product</span>
            </Link>
            
            <Link 
              href="/manage-products" 
              className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50 flex items-center space-x-1"
            >
              
              <span>Manage</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!loggedIn ? (
              <>
                <Link 
                  href="/login" 
                  className="px-6 py-2 text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors font-medium"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="px-6 py-2 bg-linear-to-r from-red-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-all font-medium"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-linear-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                  <span className="text-gray-700 font-medium">User</span>
                  <span className={`transform transition-transform ${userMenuOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors">
                       Profile
                    </Link>
                    <Link href="/orders" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors">
                       Orders
                    </Link>
                    <Link href="/favorites" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors">
                       Favorites
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors">
                       Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {!loggedIn && (
              <Link 
                href="/login" 
                className="px-4 py-2 text-red-500 text-sm border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
              >
                Login
              </Link>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              {menuOpen ? (
                <span className="text-xl">✕</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                
                <span>Home</span>
              </Link>
              
              <Link 
                href="/menu" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                
                <span>Menu</span>
              </Link>
              
              <Link 
                href="/add-product" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                
                <span>Add Product</span>
              </Link>
              
              <Link 
                href="/manage-products" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
               
                <span>Manage Products</span>
              </Link>

              {loggedIn && (
                <>
                  <div className="border-t border-gray-200 my-2 pt-2">
                    <Link 
                      href="/profile" 
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      
                      <span>Profile</span>
                    </Link>
                    <Link 
                      href="/orders" 
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      
                      <span>Orders</span>
                    </Link>
                  </div>
                  <button className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium text-left">
                    <span>Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}