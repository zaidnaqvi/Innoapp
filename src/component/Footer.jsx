import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 mt-16 shadow-inner border-t border-yellow-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm md:text-base select-none">
          © 2025 Why I Failed. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-black">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-yellow-500 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-500 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-500 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Optional Secondary Text or Links */}

      <div className="mt-4 text-center text-xs text-gray-500">
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}
