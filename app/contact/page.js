import FindUsBasic from "@/components/findus/FindUs_1";
import CTABasic from "@/components/cta/CTA_1";

export const metadata = {
  title: "Contact | Il Molino",
  description: "Find our café, opening hours, and contact information.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-24 px-6 md:px-12 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-10">
            Whether you’ve got a question, want to say hello, or just need directions — we’d love to hear from you.
          </p>
        </div>
      </section>

      <FindUsBasic />
      <CTABasic />
    </main>
  );
}
