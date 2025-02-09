import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";  // Adjust path if Navbar is in a different folder
import Footer from "../components/Footer";  // Adjust path if Footer is in a different folder
import { motion } from "framer-motion"; // Import Framer Motion for enhanced animations

export default function Process() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const targetPosition = document.getElementById("process-section").offsetTop;
      if (position >= targetPosition) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16" id="process-section">
        <motion.h2
          className="text-4xl font-bold text-center text-amber-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Process
        </motion.h2>
        
        <motion.p
          className="text-lg text-center text-amber-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          From farm to cup, every step matters.
        </motion.p>

        {/* Process Steps */}
        <div
          className={`mt-8 space-y-8 transition-transform duration-700 ${inView ? "transform-none opacity-100" : "transform translate-y-12 opacity-0"}`}
        >
          {/* Sourcing Step */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/sourcing.jpg" 
              alt="Sourcing" 
              className="w-full h-64 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-semibold text-amber-800">Sourcing</h3>
            <p className="text-amber-700 mt-2">We source high-quality beans from local farmers, ensuring sustainability and fair trade practices.</p>
          </motion.div>

          {/* Roasting Step */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/roasting.jpg" 
              alt="Roasting" 
              className="w-full h-64 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-semibold text-amber-800">Roasting</h3>
            <p className="text-amber-700 mt-2">Roasted to perfection at optimal temperatures to preserve rich aroma and flavor.</p>
          </motion.div>

          {/* Packaging Step */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/packaging.jpg" 
              alt="Packaging" 
              className="w-full h-64 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-semibold text-amber-800">Packaging</h3>
            <p className="text-amber-700 mt-2">Sealed for freshness, our products are safely packed for delivery worldwide.</p>
          </motion.div>
        </div>

        {/* Quality Control Section */}
        <motion.div
          className="mt-16 bg-white shadow-lg p-6 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-amber-900">Quality Control</h3>
          <p className="text-amber-700 mt-4">
            We implement rigorous quality control measures at each stage, ensuring consistency, freshness, and excellence.
          </p>
          <ul className="mt-4 space-y-2 text-amber-700">
            <li>Regular inspections of beans and products</li>
            <li>Adherence to international standards</li>
            <li>Dedicated quality control team ensuring each batch meets our high standards</li>
          </ul>
        </motion.div>

        {/* Factory Photos / Virtual Tour */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-amber-900">Factory Tour</h3>
          <p className="text-amber-700 mt-4">Take a look inside our factory and see the process up close!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img src="/factory1.jpg" alt="Factory Tour 1" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img src="/factory2.jpg" alt="Factory Tour 2" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img src="/factory3.jpg" alt="Factory Tour 3" className="w-full h-64 object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Capacity and Shipping */}
        <motion.div
          className="mt-16 bg-white shadow-lg p-6 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold text-amber-900">Capacity & Shipping</h3>
          <p className="text-amber-700 mt-4">
            We have the capability to process large quantities and ensure on-time delivery across the globe.
          </p>
          <ul className="mt-4 space-y-2 text-amber-700">
            <li>Production capacity of up to 5000 units per day</li>
            <li>State-of-the-art storage facilities to maintain product quality</li>
            <li>Fast and reliable shipping to multiple countries</li>
          </ul>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
