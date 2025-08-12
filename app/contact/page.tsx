import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

function page() {
  return (
    <div className="min-h-screen relative dark:bg-black bg-white">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default page;
