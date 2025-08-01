import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/browse" },
    { name: "Resources", path: "/resources" },
    { name: "Login", path: "/Login" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto  px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-black text-3xl font-extrabold tracking-wide"
        >
          Why <span className="text-blue-600">I</span> Failed
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`hover:text-blue-600 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden focus:outline-none"
        >
          <svg
            className={`w-7 h-7 text-black transition-transform duration-300 ${
              menuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {!menuOpen ? (
              <>
                <line
                  x1="4"
                  y1="7"
                  x2="20"
                  y2="7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="4"
                  y1="17"
                  x2="20"
                  y2="17"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-black font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)} // close menu on link click
                  className={`block py-2 rounded transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "bg-blue-600 text-white font-bold"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
