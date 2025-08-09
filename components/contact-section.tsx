"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Testimonial {
  company: string;
  logo: string;
  testimonial: string;
  author: string;
  position: string;
  gradient: string;
}

export function ContactSection() {
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      company: "TechCorp",
      logo: "TC",
      testimonial:
        "transformed our annual reporting process - we now visualize complex financial data in minutes instead of weeks, making stakeholder presentations more engaging and data insights crystal clear.",
      author: "Sarah Johnson",
      position: "CFO, TechCorp",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      company: "FinanceFlow",
      logo: "FF",
      testimonial:
        "revolutionized how we handle quarterly reports. Our board meetings are now 50% shorter with crystal-clear visualizations that tell the story behind the numbers.",
      author: "Michael Chen",
      position: "Director of Finance, FinanceFlow",
      gradient: "from-green-500 to-teal-600",
    },
    {
      company: "DataDriven Inc",
      logo: "DD",
      testimonial:
        "helped us turn overwhelming financial spreadsheets into beautiful, interactive dashboards. Our investors now understand our performance metrics instantly.",
      author: "Emma Rodriguez",
      position: "VP of Operations, DataDriven Inc",
      gradient: "from-orange-500 to-red-600",
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
            className={`absolute right-0 bottom-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-blue-200 dark:bg-blue-400 blur-3xl rounded-full transition-all duration-[3500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${glowVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            style={{ willChange: "transform, opacity" }}
          />
        </div>

        {/* Main heading at the top */}
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex justify-center relative z-10 mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-black dark:from-blue-300 dark:via-blue-200 dark:to-white bg-clip-text text-transparent text-center">
            Get in touch
          </h1>
        </div>

        {/* Two columns side by side */}
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10">
          {/* Left: Contact Form */}
          <div className="flex flex-col justify-center">
            <form className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="e.g. John Smith"
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. example@gmail.com"
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Let us know how we can help"
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                />
              </div>
              <Button
                type="submit"
                className="w-fit px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-xs sm:text-sm md:text-base"
              >
                Send message
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
                <span className="text-black dark:text-white font-semibold">
                  DeepFundz
                </span>{" "}
                <span className="text-neutral-600 dark:text-white/60">
                  {currentData?.testimonial || ""}
                </span>
              </blockquote>
              {/* Company logo placeholder */}
              <div className="mt-auto flex items-center gap-2 relative z-10">
                <div
                  className={`w-8 h-8 bg-gradient-to-br ${currentData?.gradient || "from-blue-500 to-purple-600"} rounded-lg flex items-center justify-center transition-all duration-300`}
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
      </section>
    </div>
  );
}
