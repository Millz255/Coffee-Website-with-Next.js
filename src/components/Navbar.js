import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const activeLinkStyle = "text-amber-200"; // Style for active link

  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">City Coffee Ltd</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={`hover:text-amber-200 transition duration-300 ${router.pathname === "/" ? activeLinkStyle : ""}`}>Home</Link>
          <Link href="/about" className={`hover:text-amber-200 transition duration-300 ${router.pathname === "/about" ? activeLinkStyle : ""}`}>About</Link>
          <Link href="/products" className={`hover:text-amber-200 transition duration-300 ${router.pathname === "/products" ? activeLinkStyle : ""}`}>Products</Link>
          <Link href="/process" className={`hover:text-amber-200 transition duration-300 ${router.pathname === "/process" ? activeLinkStyle : ""}`}>Process</Link>
          <Link href="/sustainability" className={`hover:text-amber-200 transition duration-300 ${router.pathname === "/sustainability" ? activeLinkStyle : ""}`}>Sustainability</Link>
          <Link href="/careers" className={`hover:text-amber-200 transition duration-300 ${router.pathname === "/careers" ? activeLinkStyle : ""}`}>Careers</Link>
          <Link href="/contact" className={`hover:text-amber-200 transition duration-300 ${router.pathname === "/contact" ? activeLinkStyle : ""}`}>Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">{isOpen ? "✖" : "☰"}</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-amber-800 text-white py-4">
          <Link href="/" className={`py-2 ${router.pathname === "/" ? activeLinkStyle : ""}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className={`py-2 ${router.pathname === "/about" ? activeLinkStyle : ""}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/products" className={`py-2 ${router.pathname === "/products" ? activeLinkStyle : ""}`} onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/process" className={`py-2 ${router.pathname === "/process" ? activeLinkStyle : ""}`} onClick={() => setIsOpen(false)}>Process</Link>
          <Link href="/sustainability" className={`py-2 ${router.pathname === "/sustainability" ? activeLinkStyle : ""}`} onClick={() => setIsOpen(false)}>Sustainability</Link>
          <Link href="/careers" className={`py-2 ${router.pathname === "/careers" ? activeLinkStyle : ""}`} onClick={() => setIsOpen(false)}>Careers</Link>
          <Link href="/contact" className={`py-2 ${router.pathname === "/contact" ? activeLinkStyle : ""}`} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
