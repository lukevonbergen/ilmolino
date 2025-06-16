import MenuList from "@/components/servicelist/List_2";
import TestimonialsIntermediate from "@/components/testimonials/Testimonials_2";
import CTABasic from "@/components/cta/CTA_1";
import FindUsBasic from "@/components/findus/FindUs_1";

export const metadata = {
  title: "Menu | Il Molino",
  description: "Explore our selection of fresh Italian coffee, pastries, sandwiches, and more.",
};

export default function MenuPage() {
  return (
    <main>
      <section className="py-24 px-6 md:px-12 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Menu</h1>
          <p className="text-lg text-gray-600 mb-10">
            Freshly brewed coffee, handmade pastries, and Italian brunch favourites — all crafted with care, right here in Battersea.
          </p>
        </div>
      </section>

      <MenuList />
      <TestimonialsIntermediate />
      <FindUsBasic />
      <CTABasic />
    </main>
  );
}
