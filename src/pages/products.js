import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";  // Ensure Navbar is correctly imported
import Footer from "../components/Footer";  // Ensure Footer is correctly imported

const allProducts = [
  { 
    id: 1, 
    name: "Arabica Coffee", 
    image: "/coffee-arabica.jpg", 
    category: "Arabica", 
    description: "Premium Arabica coffee beans, hand-picked from the best regions.", 
    packaging: "0.5kg, 1kg, 2kg, 5kg", 
    MOQ: 100, 
    customization: "Custom packaging and branding available."
  },
  { 
    id: 2, 
    name: "Robusta Coffee", 
    image: "/coffee-robusta.jpg", 
    category: "Robusta", 
    description: "Robusta coffee beans with a strong and bold flavor.", 
    packaging: "0.5kg, 1kg, 2kg, 5kg", 
    MOQ: 100, 
    customization: "Custom branding available."
  },
  { 
    id: 3, 
    name: "Espresso Blend", 
    image: "/coffee-espresso.jpg", 
    category: "Espresso", 
    description: "A perfect blend for making rich, full-bodied espresso.", 
    packaging: "0.5kg, 1kg, 2kg, 5kg", 
    MOQ: 100, 
    customization: "Blend adjustments available on request."
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-amber-900 animate__animated animate__fadeIn animate__delay-1s">
          Our Products
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mt-6 animate__animated animate__fadeIn animate__delay-1s">
          {["All", "Arabica", "Robusta", "Espresso"].map((category) => (
            <button
              key={category}
              className={`px-6 py-3 text-sm font-semibold rounded-md transition-all transform duration-300 ${
                selectedCategory === category
                  ? "bg-amber-900 text-white scale-105"
                  : "bg-gray-200 hover:bg-amber-200 hover:scale-110"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 animate__animated animate__fadeIn animate__delay-2s">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
