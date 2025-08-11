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

  const stepImages = [
    "https://cdn-icons-png.flaticon.com/512/2919/2919592.png", // Influencer icon
    "https://cdn-icons-png.flaticon.com/512/1828/1828919.png", // Strategy icon
    "https://cdn-icons-png.flaticon.com/512/2920/2920040.png", // Collaboration icon
    "https://cdn-icons-png.flaticon.com/512/3208/3208701.png", // Execution icon
    "https://cdn-icons-png.flaticon.com/512/1828/1828859.png", // Monitoring icon
    "https://cdn-icons-png.flaticon.com/512/1828/1828743.png", // Analytics icon
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ textWrap: "balance" }}
            className="text-6xl sm:text-6xl md:text-7xl font-extrabold text-center leading-tight mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Amplify Your{" "}
            <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
              Brand’s Reach
            </span>{" "}
            with Strategic Influencer Partnerships
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12"
          >
            In today’s digital landscape, influencer marketing is one of the most powerful ways
            to connect with new audiences and build trust. We create authentic, result-driven
            influencer campaigns that promote your product, boost brand awareness, and strengthen
            credibility.
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
              Contact Us Today
            </motion.a>
            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              Schedule a Free Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Influencer Marketing Works */}
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
              Why Influencer Marketing Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Influencers have built trust and credibility with their audiences.
              Partnering with the right ones lets your brand tap into their loyal
              following in a way traditional ads can’t match.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Influencer Marketing Services */}
      <section className="bg-white dark:bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Our Influencer Marketing Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto mb-8 rounded-full"></div>
          </motion.div>

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
                title: "Influencer Identification & Selection",
                description:
                  "We identify influencers whose audience, style, and values align with your brand for authentic promotion.",
              },
              {
                step: "2",
                title: "Campaign Strategy Development",
                description:
                  "We create tailored strategies outlining goals, messaging, content plans, and KPIs for maximum impact.",
              },
              {
                step: "3",
                title: "Collaboration & Content Creation",
                description:
                  "We work with influencers to produce engaging, organic content across platforms like Instagram, TikTok, and YouTube.",
              },
              {
                step: "4",
                title: "Campaign Execution & Management",
                description:
                  "We handle contracts, deadlines, and compliance so you can focus on results.",
              },
              {
                step: "5",
                title: "Monitoring & Optimization",
                description:
                  "We track campaign performance in real-time, making adjustments to boost engagement and ROI.",
              },
              {
                step: "6",
                title: "Analytics & Reporting",
                description:
                  "You receive detailed reports on reach, engagement, conversions, and campaign success.",
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
              Amplify Your Brand?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let’s create influencer partnerships that elevate your brand and deliver real results.
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
              Contact Us Today
            </motion.a>
            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              Schedule a Free Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
