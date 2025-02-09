import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-amber-900">Our Sustainability Practices</h1>
        <p className="mt-4 text-lg text-amber-700">
          We are committed to ethical sourcing, eco-friendly packaging, and sustainable farming.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Environmental Practices Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-amber-900">Environmental Practices</h2>
            <p className="mt-4 text-md text-gray-600">
              We prioritize reducing our carbon footprint, using renewable energy, and promoting sustainability in every stage of production.
            </p>
          </div>
          
          {/* Fair Trade Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-amber-900">Fair Trade Information</h2>
            <p className="mt-4 text-md text-gray-600">
              We work with certified fair trade farmers to ensure that they receive a fair wage for their hard work and commitment to quality.
            </p>
          </div>
          
          {/* Farmer Partnerships Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-amber-900">Farmer Partnerships</h2>
            <p className="mt-4 text-md text-gray-600">
              Our direct relationships with farmers empower them to invest in their communities and improve farming practices.
            </p>
          </div>

          {/* Sustainable Packaging Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-amber-900">Sustainable Packaging</h2>
            <p className="mt-4 text-md text-gray-600">
              We use recyclable and biodegradable materials to minimize waste and reduce environmental impact.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center">
          <p className="text-lg text-amber-700">
            Together, we can make a difference. Join us in supporting sustainable practices that benefit both our planet and the people who cultivate it.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-8 py-3 bg-amber-900 text-white font-semibold rounded-md hover:bg-amber-700 transition duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
