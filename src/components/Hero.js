import Image from 'next/image';  // Import the Image component
import Link from 'next/link';  // Import the Link component from Next.js

export default function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <div className="max-w-7xl mx-auto px-6"> {/* Container for text */}
          <h1 className="text-5xl font-extrabold mb-4 sm:text-6xl lg:text-7xl leading-tight">
            Welcome to City Coffee
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl w-full sm:w-2/3 lg:w-1/2 mx-auto"> {/* Centered paragraph */}
            Experience the best brews, sourced from the finest beans.
          </p>
          
          {/* Link wrapped around the button */}
          <Link href="/products" passHref>
            <button className="mt-6 px-8 py-3 bg-amber-500 hover:bg-amber-700 text-white rounded-full text-xl transition duration-300">
              Explore Our Coffee
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
