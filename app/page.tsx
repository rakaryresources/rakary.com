import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen relative dark:bg-black">
      <Navbar />  
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}
