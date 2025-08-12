"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabaseClient";
import { useToast } from "@/hooks/use-toast";

interface Testimonial {
  company: string;
  logo: string;
  testimonial: string;
  author: string;
  position: string;
  gradient: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  preferred_contact_method: string;
  message: string;
}

export function ContactSection() {
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // State for form
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    preferred_contact_method: "email",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      company: "InfluencePro",
      logo: "IP",
      testimonial:
        "rakary.com helped me grow my Instagram following by 300% in just 2 months! Their content ideas and lead generation tools are a game changer for any influencer.",
      author: "Ava Patel",
      position: "Lifestyle Influencer, InfluencePro",
      gradient: "from-pink-500 to-yellow-500",
    },
    {
      company: "BrandBoosters",
      logo: "BB",
      testimonial:
        "With rakary.com, I started getting brand deals every week. The platform makes it so easy to create engaging content and connect with new clients.",
      author: "Liam Nguyen",
      position: "Content Creator, BrandBoosters",
      gradient: "from-blue-500 to-green-500",
    },
    {
      company: "ViralMakers",
      logo: "VM",
      testimonial:
        "I never thought lead generation could be this simple. rakary.com’s tools helped me turn my followers into real business leads!",
      author: "Sophia Kim",
      position: "Influencer, ViralMakers",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      company: "ContentWave",
      logo: "CW",
      testimonial:
        "rakary.com gave me the confidence to pitch to bigger brands. My content is more professional and my audience is more engaged than ever!",
      author: "Noah Smith",
      position: "Travel Blogger, ContentWave",
      gradient: "from-orange-400 to-pink-600",
    },
    {
      company: "LeadGenX",
      logo: "LG",
      testimonial:
        "Thanks to rakary.com, I doubled my email list and started earning from my content. Highly recommended for any influencer serious about growth.",
      author: "Maya Garcia",
      position: "Fitness Influencer, LeadGenX",
      gradient: "from-green-400 to-blue-600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_us").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          preferred_contact_method: formData.preferred_contact_method,
          message: formData.message,
        },
      ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description:
          "Your message has been sent successfully. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferred_contact_method: "email",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Ensure we always have valid data
  const currentData = testimonials[currentTestimonial] || testimonials[0];
  const [glowVisible, setGlowVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setGlowVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-4 pr-4 sm:pb-6 sm:pr-6 md:pb-8 md:pr-8 bg-white dark:bg-black">
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-black relative overflow-hidden rounded-[8vw] sm:rounded-[10vw] md:rounded-[12vw]">
        {/* Glowing background for testimonial with rising animation */}
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none z-0">
          <div
            className={`absolute right-0 bottom-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gray-400 dark:bg-gray-400 blur-3xl rounded-full transition-all duration-[3500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              glowVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ willChange: "transform, opacity" }}
          />
        </div>

        {/* Main heading at the top */}
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex flex-col items-center relative z-10 mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-400 via-gray-600 to-black/70 dark:from-gray-400 dark:via-gray-200 dark:to-white bg-clip-text text-transparent text-center mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-black/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Have questions? Ready to take your marketing efforts to the next
            level? We're here to help! Whether you want to learn more about our
            services, book a demo, or discuss your specific needs, our team is
            just a message away.
          </p>
        </div>

        {/* Two columns side by side */}
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10">
          {/* Left: Contact Form */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-2">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-black/70 dark:text-white/70">
                Fill out the form below, and one of our team members will get
                back to you as soon as possible.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:gap-5 md:gap-6"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Smith"
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 text-sm sm:text-base h-10 sm:h-11"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Email address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. example@gmail.com"
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 text-sm sm:text-base h-10 sm:h-11"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Phone Number (optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +1 (555) 123-4567"
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="preferred_contact_method"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="preferred_contact_method"
                  name="preferred_contact_method"
                  value={formData.preferred_contact_method}
                  onChange={handleInputChange}
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white text-sm sm:text-base h-10 sm:h-11 rounded-md px-3"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Let us know how we can help"
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-fit px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* Right: Testimonial Card */}
          <div className="flex items-center justify-center">
            <div className="relative w-full bg-neutral-100 dark:bg-[#111214] rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 h-auto flex flex-col justify-between border border-neutral-300 dark:border-neutral-800 overflow-hidden min-h-[250px] sm:min-h-[300px]">
              {/* Company name/logo */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4 relative z-10">
                <span className="font-bold text-base sm:text-lg text-black dark:text-white">
                  {currentData?.company || "Company"}
                </span>
                {/* Navigation arrows */}
                <div className="ml-auto flex gap-1 sm:gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      width="14"
                      height="14"
                      className="sm:w-4 sm:h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <svg
                      width="14"
                      height="14"
                      className="sm:w-4 sm:h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Testimonial text */}
              <blockquote className="text-sm sm:text-base md:text-lg text-black/80 dark:text-white/80 font-light mb-4 sm:mb-6 transition-all duration-300 relative z-10">
                <span className="text-neutral-600 dark:text-white/60">
                  {currentData?.testimonial || ""}
                </span>
              </blockquote>
              {/* Company logo placeholder */}
              <div className="mt-auto flex items-center gap-2 relative z-10">
                <div
                  className={`w-8 h-8 bg-gradient-to-br ${
                    currentData?.gradient || "from-blue-500 to-purple-600"
                  } rounded-lg flex items-center justify-center transition-all duration-300`}
                >
                  <span className="text-black dark:text-white font-bold text-sm">
                    {currentData?.logo || "C"}
                  </span>
                </div>
                <div>
                  <div className="text-black dark:text-white text-sm font-medium">
                    {currentData?.author || "Author"}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                    {currentData?.position || "Position"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center w-full">
          <div className="w-full max-w-xl p-4 bg-neutral-50 dark:bg-[#0f0f0f] rounded-lg border border-neutral-200 dark:border-neutral-800 text-center">
            <p className="text-sm sm:text-base font-semibold text-black dark:text-white mb-2">
              Want to talk to us right away?
            </p>
            <p className="text-sm text-black/70 dark:text-white/70">
              Call us at{" "}
              <span className="font-semibold text-black dark:text-white">
                (555) 123-4567
              </span>
              , and let's discuss how we can help you succeed!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
