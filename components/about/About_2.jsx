export default function AboutUsIntermediate() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">
            A Taste of Italy in the Heart of Battersea
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Il Molino, we’re all about warm service, rich coffee, and handmade pastries served in a relaxed, welcoming setting. Whether you’re grabbing a quick espresso or enjoying a slow brunch, our café brings the feel of an Italian local right to Battersea Park Road.
          </p>
          <ul className="text-gray-600 space-y-3">
            <li>☕ Authentic Italian coffee, roasted fresh</li>
            <li>🥐 Handmade pastries & savoury specials daily</li>
            <li>🌿 Gluten-free options available</li>
            <li>🐾 Pet-friendly outdoor seating</li>
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=987&q=80"
            alt="Il Molino café interior"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}