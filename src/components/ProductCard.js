export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        
        {/* Detailed specifications */}
        <div className="mt-4 text-gray-700 text-sm">
          <p><strong>Packaging Options:</strong> {product.packaging}</p>
          <p><strong>MOQ:</strong> {product.MOQ} units</p>
          <p><strong>Customization:</strong> {product.customization}</p>
        </div>

        {/* Hidden Price Section */}
        <div className="mt-6 flex justify-between items-center">
          <button className="px-4 py-2 bg-amber-900 text-white rounded-md transition hover:bg-amber-800">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
