import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // For animation

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const images = [
    "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"
  ];

  const openModal = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const endDrag = () => {
    setIsDragging(false);
    if (currentTranslateX > 50) {
      goToPreviousImage();
    } else if (currentTranslateX < -50) {
      goToNextImage();
    }
    setCurrentTranslateX(0); // Reset translation
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setCurrentTranslateX(diff); // Update translation
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    // Prevent default scroll behavior when dragging
    const preventDefault = (e) => e.preventDefault();
    if (isDragging) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("touchmove", onDrag);
      window.addEventListener("mouseup", endDrag);
      window.addEventListener("touchend", endDrag);
    } else {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchend", endDrag);
    }

    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchend", endDrag);
    };
  }, [isDragging]);

  return (
    <div>
      {/* Gallery Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative"
            whileHover={{ scale: 1.05 }} // Hover animation
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover cursor-pointer rounded-lg shadow-lg"
              onClick={() => openModal(image, index)}
              onLoad={handleImageLoad}
              style={{ opacity: imageLoaded ? 1 : 0.5 }} // fade-in effect when image loads
            />
          </motion.div>
        ))}
      </div>

      {/* Modal Section */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            style={{ transform: `translateX(${currentTranslateX}px)` }} // Sliding effect
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            <img
              src={currentImage}
              alt="Large view"
              className="max-w-full max-h-screen rounded-lg shadow-2xl transition-transform duration-300 ease-out"
            />

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-gray-700 transition-colors transform -translate-y-1/2"
              onClick={goToPreviousImage}
            >
              &#8249;
            </button>

            <button
              className="absolute top-1/2 right-4 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-gray-700 transition-colors transform -translate-y-1/2"
              onClick={goToNextImage}
            >
              &#8250;
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-3 text-white bg-black rounded-full hover:bg-gray-700 transition-colors"
              onClick={closeModal}
            >
              ✖
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
