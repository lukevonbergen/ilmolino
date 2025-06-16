export default function StatsSectionIntermediate() {
  const stats = [
    {
      label: 'Coffees Served',
      value: '20,000+',
      icon: '☕',
    },
    {
      label: 'Pastries Baked',
      value: '15,000+',
      icon: '🥐',
    },
    {
      label: 'Happy Customers',
      value: '4.8★',
      icon: '😊',
    },
    {
      label: 'Years in Battersea',
      value: '12+',
      icon: '📍',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-gray-900">
          A Local Favourite
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ label, value, icon }, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg border text-center hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}