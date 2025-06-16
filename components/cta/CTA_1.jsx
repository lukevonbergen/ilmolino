export default function CallToAction() {
  return (
    <section className="bg-amber-700 text-white py-20 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Visit Us in Battersea
        </h2>
        <p className="text-lg md:text-xl text-amber-100 mb-8">
          Whether it’s a quick espresso or a relaxed brunch, Il Molino is ready to welcome you with warmth, flavour, and great coffee.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-100 transition"
        >
          Plan Your Visit
        </a>
      </div>
    </section>
  );
}