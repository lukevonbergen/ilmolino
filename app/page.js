import HeroBasic from "@/components/hero/Hero_1";
import TestimonialsIntermediate from "@/components/testimonials/Testimonials_2"
import CTABasic from "@/components/cta/CTA_1"
import Stats from "@/components/stats/Stats_2"
import FindUsBasic from "@/components/findus/FindUs_1"
import About from "@/components/about/About_2"

export const metadata = {
  title: "Il Molino | Italian Café in Battersea",
  description: "Welcome to Il Molino – a cozy Italian café in Battersea serving artisan coffee, fresh pastries, and homemade brunch favourites. Visit us today.",
};

export default function HomePage() {
  return (
      <main>
        <HeroBasic />
        <About />
        <Stats />
        <FindUsBasic />
        <TestimonialsIntermediate />
        <CTABasic />
      </main>
  );
}
