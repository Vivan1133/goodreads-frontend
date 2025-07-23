import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-500">Bookshelf</h2>
            <p className="text-sm text-gray-400 mt-2">
              Discover, Organize, and Enjoy your reads.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-300 text-center md:text-left">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/contact" className="hover:text-white transition">Shelf</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/logout" className="hover:text-white transition">Logout</Link>
          </div>

          <div className="flex space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Bookshelf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
