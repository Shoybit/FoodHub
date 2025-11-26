/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null); 
  const loggedIn = !!user;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        router.push("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav className="bg-black/20 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100/50">
      <div className="max-w-11/12 mx-auto px-2 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-16">
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

          <div className="hidden lg:flex items-center space-x-1">
            {["/", "/menu", "/add-product", "/manage-products"].map((path, i) => {
              const names = ["Home", "Menu", "Add Product", "Manage"];
              return (
                <Link
                  key={i}
                  href={path}
                  className={`px-4 py-2 font-medium rounded-lg flex items-center space-x-1 transition-colors ${
                    pathname === path ? "text-red-500 bg-red-50/20" : "text-white hover:text-red-500 hover:bg-red-50/40"
                  }`}
                >
                  <span>{names[i]}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {!loggedIn ? (
              <>
                <Link
                  href="/login"
                  className="px-6 py-2 text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 bg-linear-to-r from-red-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-all font-medium"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-500/40 transition-colors cursor-pointer"
                >
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className={`transform transition-transform ${userMenuOpen ? "rotate-180" : ""}`}>▼</span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0  mt-2 w-48 bg-black rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <span className="text-white font-medium ml-3">{user.displayName}</span>

                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            {loggedIn && (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className={`transform transition-transform ${userMenuOpen ? "rotate-180" : ""}`}>▼</span>
                
              </button>
            )}
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
              {menuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-black">
            <div className="flex flex-col space-y-3">
              <Link href="/" className={`px-4 py-3 rounded-lg font-medium ${pathname === "/" ? "text-red-500 bg-red-50" : "text-white hover:text-red-500 hover:bg-red-50"}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/menu" className={`px-4 py-3 rounded-lg font-medium ${pathname === "/menu" ? "text-red-500 bg-red-50" : "text-white hover:text-red-500 hover:bg-red-50"}`} onClick={() => setMenuOpen(false)}>Menu</Link>
              <Link href="/add-product" className={`px-4 py-3 rounded-lg font-medium ${pathname === "/add-product" ? "text-red-500 bg-red-50" : "text-white hover:text-red-500 hover:bg-red-50"}`} onClick={() => setMenuOpen(false)}>Add Product</Link>
              <Link href="/manage-products" className={`px-4 py-3 rounded-lg font-medium ${pathname === "/manage-products" ? "text-red-500 bg-red-50" : "text-white hover:text-red-500 hover:bg-red-50"}`} onClick={() => setMenuOpen(false)}>Manage Products</Link>
            </div>
          </div>
        )}

        {loggedIn && userMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-2 bg-black">
                            <span className="text-white ml-4 border-b text-sm">{user?.displayName}</span>

            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 hover:text-red-500 transition-colors">
              Logout
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
