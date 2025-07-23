import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "Redux/Slices/AuthSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const dispatch = useDispatch();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  function handleOnLogoutClick() {
    dispatch(logout());
  }

  return (
    <nav className="bg-white sticky shadow-md top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Bookshelf
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Shelf</Link>

          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
            >
              <span>More</span>
              <ChevronDown size={18} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link
                  onClick={handleOnLogoutClick}
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
 
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition">Shelf</Link>
          <Link to="/logout" className="block text-gray-700 hover:text-blue-600 transition">Logout</Link>
        </div>
      )}

  
    </nav>
  );
}
