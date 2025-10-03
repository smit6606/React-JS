// Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">iSTUDIO</h2>
            <p className="text-sm leading-relaxed">
              We craft modern websites and digital experiences. Our mission is
              to deliver high-quality projects with creativity, performance, and
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-600 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Pages */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="hover:text-blue-600 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-blue-600 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonial"
                  className="hover:text-blue-600 transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/404" className="hover:text-blue-600 transition">
                  404 Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Surat, Gujarat, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@istudio.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} iSTUDIO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
