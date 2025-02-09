import { motion } from "framer-motion"; // For animation
import Navbar from "../components/Navbar";
import AboutUsContent from "../components/AboutUsContent";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-amber-50">
      {/* Navbar */}
      <Navbar />

      {/* About Us Content */}
      <motion.div
        className="py-16 px-8 md:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AboutUsContent />
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        className="px-8 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <ImageGallery />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
