"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";
import { motion } from "framer-motion";
import { CardHoverSocialMediaStratergy } from "@/components/card-hover-social-media-stratergy"; 

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stepImages = [
    "https://cdn-icons-png.flaticon.com/512/553/553416.png", // Target icon for step 1
    "https://cdn-icons-png.flaticon.com/512/1256/1256650.png", // Research icon for step 2
    "https://cdn-icons-png.flaticon.com/512/3176/3176361.png", // Mobile icon for step 3
    "https://cdn-icons-png.flaticon.com/512/2920/2920265.png", // Content icon for step 4
    "https://cdn-icons-png.flaticon.com/512/2058/2058148.png", // Rocket icon for step 5
    "https://cdn-icons-png.flaticon.com/512/1828/1828765.png", // Analytics icon for step 6
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white dark:bg-black py-24 px-6 pt-36 text-center overflow-hidden relative ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10"></div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ textWrap: "balance" }}
            className="text-6xl sm:text-6xl md:text-7xl font-extrabold text-center leading-tight mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Elevate your{" "}
            <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
              Brand
            </span>{" "}
            with Us.
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Tailored Social Media Strategy for Maximum Impact
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12"
          >
            In today's digital world, a solid social media strategy is essential
            for building brand awareness, engaging with your audience, and
            driving business growth. At Rakary.com, we specialize in crafting
            customized strategies designed to deliver real results.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Start Your Strategy
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              View All Services
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Why You Need a Strategy */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Why You Need a Social Media Strategy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Without a clear strategy, your social media efforts can become
              disjointed and ineffective. A well-developed strategy ensures
              you're reaching the right audience with the right message, leading
              to higher engagement and more conversions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: "4.8B", label: "Social Media Users Worldwide" },
              { number: "147%", label: "Average ROI from Social Media" },
              { number: "71%", label: "More Likely to Purchase from Referral" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center p-6"
              >
                <div className="text-4xl font-bold bg-gradient-to-t from-gray-600 to-gray-500 dark:from-gray-600 dark:to-gray-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white dark:bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Our Approach to Strategy Development
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A step-by-step, proven methodology to craft impactful strategies
              that actually work.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-16"
          >
            {[
              {
                step: "1",
                title: "Understanding Your Business & Goals",
                description:
                  "We start by getting to know your brand, audience, and objectives. Whether you want more visibility, traffic, or leads, we create a strategy tailored to you.",
              },
              {
                step: "2",
                title: "Audience Research & Targeting",
                description:
                  "We study your target audience’s behaviors, preferences, and pain points to ensure your content hits home.",
              },
              {
                step: "3",
                title: "Platform Selection",
                description:
                  "We identify the right platforms—Facebook, Instagram, LinkedIn, TikTok, or others—based on your audience and goals.",
              },
              {
                step: "4",
                title: "Content Planning & Creation",
                description:
                  "We design a content calendar that delivers consistent, engaging, and value-packed content for your audience.",
              },
              {
                step: "5",
                title: "Campaign Execution & Optimization",
                description:
                  "We launch campaigns and continuously monitor, tweak, and improve them for top-tier performance.",
              },
              {
                step: "6",
                title: "Analytics & Reporting",
                description:
                  "You get detailed, transparent reports tracking engagement, traffic, conversions, and ROI.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step Image with Number Badge */}
                <div className="relative flex-shrink-0">
                  <img
                    src={stepImages[index]}
                    alt={item.title}
                    className="w-24 h-24 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-800"
                  />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    {item.step}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <CardHoverSocialMediaStratergy />

      {/* CTA */}
      <section className="bg-white dark:bg-black py-20 px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Ready to{" "}
            <span className="bg-gradient-to-t from-blue-500 to-white bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Brand?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let's create a results-driven social media strategy that elevates
            your online presence and drives real business growth.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Start Your Strategy Today
            </motion.a>
            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              Free Consultation
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              Trusted by leading brands worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl">🏢</div>
              <div className="text-2xl">🚀</div>
              <div className="text-2xl">💼</div>
              <div className="text-2xl">🌟</div>
              <div className="text-2xl">📱</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
