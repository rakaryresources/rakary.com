import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { Navbar } from "@/components/navbar";
import { FeaturesSectionDemo } from "@/components/advanced-feature";
import { MaksedDivDemo } from "@/components/masked-video";
import TextScrollComponent from "@/components/text-scroll-component";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen relative dark:bg-black">
      <Navbar />
      <Hero />
      <FeaturesSectionDemo />
      <MaksedDivDemo />
      <Testimonials />
      <FAQ />
      <TextScrollComponent />
      <Footer />
    </div>
  );
}
