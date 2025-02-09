import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email.includes('@')) errors.email = "Valid email required";
    if (!formData.message) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      try {
        const response = await fetch('/api/contact', { // Replace with your backend API URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        } else {
          setErrors({ message: "Something went wrong. Please try again." });
        }
      } catch (error) {
        setErrors({ message: "Network error. Please try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
 
      <form className="mt-8 bg-white p-8 shadow-xl rounded-2xl transition-transform transform hover:scale-105" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-amber-900 text-lg">Name</label>
          <input
            type="text"
            className={`w-full border p-3 rounded-md transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-amber-600'}`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1 animate__animated animate__fadeIn">{errors.name}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-amber-900 text-lg">Email</label>
          <input
            type="email"
            className={`w-full border p-3 rounded-md transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-amber-600'}`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 animate__animated animate__fadeIn">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-amber-900 text-lg">Message</label>
          <textarea
            className={`w-full border p-3 rounded-md transition-all duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-amber-600'}`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Enter your message"
            rows="4"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1 animate__animated animate__fadeIn">{errors.message}</p>}
        </div>

        <button className="w-full bg-amber-800 text-white py-3 rounded-md hover:bg-amber-700 transition transform hover:scale-105 duration-300" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && <p className="text-green-500 mt-4">Your message has been sent successfully!</p>}
        {errors.message && !success && <p className="text-red-500 mt-4">{errors.message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
