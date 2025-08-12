import { BookServiceSection } from "@/components/book-service-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

export default function BookServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <BookServiceSection />
      <Toaster />
      <Footer />
    </div>
  );
}
