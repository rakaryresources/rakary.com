"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabaseClient";
import { useToast } from "@/hooks/use-toast";

interface ServiceFormData {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  service_type: string;
  budget_range: string;
  project_timeline: string;
  preferred_contact_method: string;
  message: string;
}

export function BookServiceSection() {
  const [formData, setFormData] = useState<ServiceFormData>({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    service_type: "",
    budget_range: "",
    project_timeline: "",
    preferred_contact_method: "email",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [glowVisible, setGlowVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setGlowVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

    if (
      !formData.name ||
      !formData.email ||
      !formData.service_type ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("book_service").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company_name: formData.company_name || null,
          service_type: formData.service_type,
          budget_range: formData.budget_range || null,
          project_timeline: formData.project_timeline || null,
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
          "Your service request has been submitted successfully. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company_name: "",
        service_type: "",
        budget_range: "",
        project_timeline: "",
        preferred_contact_method: "email",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Social Media Strategy",
    "Ads Management",
    "Content Creation",
    "Influencer Marketing",
    "Lead Generation",
    "Branding & Design",
    "Management Services",
    "Other",
  ];

  const budgetRanges = [
    "₹10,000 - ₹20,000",
    "₹20,000 - ₹30,000",
    "₹30,000 - ₹40,000",
    "₹50,000+",
    "Not sure yet",
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  return (
    <div className="pb-4 pr-4 pt-16 sm:pb-6 sm:pr-6 md:pb-8 md:pr-8 bg-white dark:bg-black">
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-black relative overflow-hidden rounded-[8vw] sm:rounded-[10vw] md:rounded-[12vw]">
        {/* Glowing background with rising animation */}
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 dark:from-gray-400 dark:via-gray-300 dark:to-white bg-clip-text text-transparent text-center mb-4 sm:mb-6">
            Book a Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-black/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your brand? Choose from our comprehensive marketing
            services and let's discuss how we can help you achieve your goals.
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Service Booking Form */}
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl relative z-10">
          <div className="bg-neutral-50 dark:bg-[#0f0f0f] rounded-2xl p-6 sm:p-8 md:p-10 border border-neutral-200 dark:border-neutral-800 shadow-xl">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-3">
                Tell us about your project
              </h2>
              <p className="text-sm sm:text-base text-black/70 dark:text-white/70">
                The more details you provide, the better we can tailor our
                proposal to your needs.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              {/* Personal Information */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Smith"
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. john@company.com"
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +1 (555) 123-4567"
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company_name"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Company Name
                </label>
                <Input
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  placeholder="e.g. Your Company Inc."
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400"
                />
              </div>

              {/* Service Details */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service_type"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Service Needed *
                </label>
                <select
                  id="service_type"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white h-11 rounded-md px-3"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="budget_range"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Budget Range
                </label>
                <select
                  id="budget_range"
                  name="budget_range"
                  value={formData.budget_range}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white h-11 rounded-md px-3"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="project_timeline"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Project Timeline
                </label>
                <select
                  id="project_timeline"
                  name="project_timeline"
                  value={formData.project_timeline}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white h-11 rounded-md px-3"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="preferred_contact_method"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="preferred_contact_method"
                  name="preferred_contact_method"
                  value={formData.preferred_contact_method}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white h-11 rounded-md px-3"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              {/* Message spans full width */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project goals, target audience, current challenges, and any specific requirements..."
                  className="bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 min-h-[120px]"
                  required
                />
              </div>

              {/* Submit button spans full width */}
              <div className="md:col-span-2 flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                 className="w-fit px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  {isSubmitting ? "Submitting..." : "Submit Service Request"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-8 flex justify-center w-full relative z-10">
          <div className="w-full max-w-2xl p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 text-center">
            <p className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Need immediate assistance?
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-200">
              Call us at{" "}
              <span className="font-semibold text-blue-900 dark:text-blue-100">
                (555) 123-4567
              </span>{" "}
              or email{" "}
              <span className="font-semibold text-blue-900 dark:text-blue-100">
                hello@rakary.com
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
