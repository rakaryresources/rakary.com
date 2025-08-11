"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

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

  const stepImages = [
    "https://cdn-icons-png.flaticon.com/512/1041/1041883.png", // Brand Strategy
    "https://cdn-icons-png.flaticon.com/512/747/747376.png",   // Logo Design
    "https://cdn-icons-png.flaticon.com/512/3655/3655584.png", // Brand Identity
    "https://cdn-icons-png.flaticon.com/512/841/841364.png",   // Website Design
    "https://cdn-icons-png.flaticon.com/512/2965/2965358.png", // Packaging
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Marketing Materials
    "https://cdn-icons-png.flaticon.com/512/2910/2910768.png", // Brand Guidelines
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white dark:bg-black py-24 px-6 pt-36 text-center overflow-hidden relative">
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
            transition={{ duration: 0.6 }}
            style={{ textWrap: "balance" }}
            className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Build a{" "}
            <span className="bg-gradient-to-t from-blue-500 to-gray-200 dark:from-blue-400 dark:to-gray-300 bg-clip-text text-transparent">
              Strong, Memorable Brand
            </span>{" "}
            with Us
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Expert Branding & Design Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12"
          >
            Your brand is more than just a logo or a color scheme—it’s how your customers perceive and connect with your business. We help you create a compelling, consistent, and visually stunning brand that tells your unique story.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all"
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all"
            >
              Free Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Branding Matters */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Why Branding & Design Matter
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              A strong brand differentiates your business, builds trust, and fosters long-term loyalty. Good design isn’t just about looks—it creates a cohesive experience that resonates and leaves a lasting impression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Our Branding & Design Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From brand strategy to final design, we offer a complete suite of services to bring your brand vision to life.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-16"
          >
            {[
              { title: "Brand Strategy Development", desc: "We develop a tailored brand strategy that ensures effective communication and connection with your target audience." },
              { title: "Logo Design", desc: "Crafting memorable logos that reflect your brand’s mission, personality, and values." },
              { title: "Brand Identity Design", desc: "Complete visual identity systems including color palettes, typography, and graphic elements." },
              { title: "Website & Digital Design", desc: "Designing websites and digital experiences that align with your brand identity and engage users." },
              { title: "Packaging Design", desc: "Creating product packaging that stands out while staying true to your brand." },
              { title: "Marketing Materials Design", desc: "Eye-catching brochures, flyers, and ads that amplify your brand’s message." },
              { title: "Brand Guidelines", desc: "Comprehensive brand manuals to ensure consistency across all channels." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={stepImages[index]}
                    alt={item.title}
                    className="w-24 h-24 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-800"
                  />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
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
              Build Your Brand?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let’s create a brand that leaves a lasting impression and sets you apart in your industry.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all"
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all"
            >
              Free Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
