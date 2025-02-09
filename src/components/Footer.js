import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-100 text-amber-900 py-12 mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-3xl font-semibold text-amber-900">City Coffee Ltd</h3>
          <p className="text-sm mt-2">&copy; {currentYear} City Coffee. All rights reserved.</p>
        </div>

        {/* External Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
          <a
            href="https://www.coffee.go.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-900 hover:text-amber-600 transition duration-300 text-lg"
          >
            Bodi ya Kahawa
          </a>
          <a
            href="https://www.viwanda.go.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-900 hover:text-amber-600 transition duration-300 text-lg"
          >
            Wizara ya Viwanda
          </a>
          <a
            href="https://www.kilimo.go.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-900 hover:text-amber-600 transition duration-300 text-lg"
          >
            Wizara ya Kilimo
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-900 hover:text-amber-600 transition duration-300"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-900 hover:text-amber-600 transition duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-900 hover:text-amber-600 transition duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-900 hover:text-amber-600 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
