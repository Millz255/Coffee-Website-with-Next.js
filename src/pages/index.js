import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";  

const featuredProducts = [
  { id: 1, name: "Arabica Coffee", image: "/coffee-arabica.jpg", category: "Arabica", price: 12000 },
  { id: 2, name: "Robusta Coffee", image: "/coffee-robusta.jpg", category: "Robusta", price: 10000 },
  { id: 3, name: "Espresso Blend", image: "/coffee-espresso.jpg", category: "Espresso", price: 15000 },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar isVisible={isVisible} />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Featured Products Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="transform transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
