import { Coffee, Croissant, Leaf } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6 md:px-12 bg-white text-white">
      {/* Background image layer */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=1600&q=80"
          alt="Cafe background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* dark overlay */}
      </div>

      {/* Decorative blur circles (optional) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-yellow-100 rounded-full blur-3xl opacity-30 top-[-200px] left-[-200px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-amber-100 rounded-full blur-2xl opacity-30 bottom-[-100px] right-[-100px]"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Welcome to <span className="text-amber-400">Il Molino</span>
        </h1>
        <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mb-8">
          A cozy Italian café in Battersea serving rich coffee, fresh pastries, and homemade brunch favourites — all with a local touch.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#menu"
            className="bg-amber-500 text-white px-8 py-3 rounded-md font-medium text-lg shadow hover:bg-amber-600 transition"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="text-amber-300 font-medium px-8 py-3 rounded-md border border-amber-300 bg-transparent hover:bg-amber-100/10 transition"
          >
            Visit Us
          </a>
        </div>

        <p className="mt-12 text-sm text-amber-200 tracking-wide uppercase">
          Loved by locals since 2011
        </p>

        <div className="flex justify-center items-center gap-10 mt-6 opacity-90 text-amber-300">
          <Coffee className="h-6 w-6" />
          <Croissant className="h-6 w-6" />
          <Leaf className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}