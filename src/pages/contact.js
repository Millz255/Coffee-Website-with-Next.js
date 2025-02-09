import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-amber-100 py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-amber-900 animate__animated animate__fadeIn">
            Contact Us
          </h2>
          <p className="text-xl text-amber-700 mt-4 animate__animated animate__fadeIn animate__delay-1s">
            We’d love to hear from you! Reach out to us with any questions or feedback.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Office Locations & Sales Representatives */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-amber-900 text-center mb-8">Our Offices</h3>

        {/* HQ Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h4 className="text-2xl font-semibold text-amber-800">📍 Headquarters (HQ)</h4>
          <p className="text-gray-700 mt-2">
            City Coffee Limited. 
            P.O. Box 2576, Mbeya  
            Phone: <a href="tel:+255252552061" className="text-amber-600">+255 (25) 2552061</a>
          </p>
        </div>

        {/* Regional Sales Representatives */}
        <h3 className="text-3xl font-bold text-amber-900 text-center my-8">Regional Sales Representatives</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'John Doe', region: 'Dar es Salaam', phone: '+255 789 456 123', email: 'john@citycoffee.co.tz' },
            { name: 'Jane Smith', region: 'Arusha', phone: '+255 754 678 321', email: 'jane@citycoffee.co.tz' },
            { name: 'Michael Kim', region: 'Dodoma', phone: '+255 765 123 890', email: 'michael@citycoffee.co.tz' }
          ].map((rep, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h4 className="text-xl font-semibold text-amber-800">{rep.name}</h4>
              <p className="text-gray-600">{rep.region}</p>
              <p className="text-gray-700">📞 <a href={`tel:${rep.phone}`} className="text-amber-600">{rep.phone}</a></p>
              <p className="text-gray-700">✉️ <a href={`mailto:${rep.email}`} className="text-amber-600">{rep.email}</a></p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Map */}
      <div className="bg-gray-100 py-12">
        <h3 className="text-3xl font-bold text-amber-900 text-center mb-6">Find Us on the Map</h3>
        <div className="max-w-4xl mx-auto">
          <iframe
            title="City Coffee Ltd Location"
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8352526201766!2d35.737552815318495!3d-8.915672798572634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCity%20Coffee%20Ltd!5e0!3m2!1sen!2stz!4v1633284978841"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center py-6">
        <h3 className="text-2xl font-bold text-amber-900">Connect with Us</h3>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://wa.me/255789123456" className="text-green-500 text-2xl" title="WhatsApp">📱</a>
          <a href="https://facebook.com/citycoffeetz" className="text-blue-600 text-2xl" title="Facebook">📘</a>
          <a href="https://instagram.com/citycoffeetz" className="text-pink-500 text-2xl" title="Instagram">📷</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
