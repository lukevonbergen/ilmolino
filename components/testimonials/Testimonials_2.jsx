export default function TestimonialsIntermediate() {
  const testimonials = [
    {
      name: "Ben Fish",
      title: "Local Customer",
      quote: "Lovely place, great coffee, and selection of pastries and sandwiches. Pleasant staff, easy vibe, nice space.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Rafal Skoczkowski",
      title: "Regular Visitor",
      quote: "Great food, incredibly friendly staff. Staff always willing to chat and serve with a smile.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=26",
    },
    {
      name: "Christina Hunt",
      title: "Neighbourhood Customer",
      quote: "Fresh food, especially the Portuguese natas tarts. Friendly and quick service.",
      rating: 4,
      avatar: "https://i.pravatar.cc/100?img=47",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          What Our Customers Say
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          A few kind words from our regulars.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {testimonials.map(({ name, title, quote, rating, avatar }, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg border shadow hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-gray-900">{name}</div>
                  <div className="text-xs text-gray-500">{title}</div>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-500 text-sm mb-3">
                {"★".repeat(rating)}{"☆".repeat(5 - rating)}
              </div>
              <p className="text-gray-700 italic">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}