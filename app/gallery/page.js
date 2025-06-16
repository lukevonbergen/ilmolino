import CTABasic from "@/components/cta/CTA_1";
import FindUsBasic from "@/components/findus/FindUs_1";
import GalleryGrid from "@/components/gallery/Gallery_1";

export const metadata = {
  title: "Gallery | Il Molino",
  description: "A look inside our cozy Battersea café — from fresh pastries to friendly faces.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="py-24 px-6 md:px-12 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Gallery</h1>
          <p className="text-lg text-gray-600 mb-10">
            Take a peek inside Il Molino — the pastries, the people, the place.
          </p>
        </div>
      </section>

      <GalleryGrid />
      <FindUsBasic />
      <CTABasic />
    </main>
  );
}
