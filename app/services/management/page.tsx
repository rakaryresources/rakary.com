"use client";

import React from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 },
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
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Account Setup
    "https://cdn-icons-png.flaticon.com/512/3039/3039381.png", // Content Scheduling
    "https://cdn-icons-png.flaticon.com/512/1077/1077035.png", // Engagement
    "https://cdn-icons-png.flaticon.com/512/1828/1828911.png", // Reporting
    "https://cdn-icons-png.flaticon.com/512/753/753345.png", // Crisis Management
    "https://cdn-icons-png.flaticon.com/512/3209/3209265.png", // Community Growth
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ textWrap: "balance" }}
            className="text-6xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Maximize Your Online Presence with{" "}
            <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
              Expert Social Media Management
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12"
          >
            Managing your social media accounts can be time-consuming and overwhelming. At [Your Company Name], we handle every aspect of your social media management, from posting content to engaging with your audience. Our goal is to help you build a strong, consistent, and impactful online presence that drives results, while you focus on running your business.
          </motion.p>
        </motion.div>
      </section>

      {/* Why You Need Section */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Why You Need Social Media Management
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            In today’s digital world, social media is more than just a communication tool—it's a vital part of your business strategy. Consistent, high-quality content and engagement are key to keeping your brand top-of-mind for your audience. Effective social media management can improve brand awareness, build trust, and increase customer loyalty.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
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
              Our Social Media Management Services
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
                title: "Account Setup & Optimization",
                description:
                  "Whether you're starting from scratch or need a profile revamp, we ensure that your social media profiles are fully optimized for maximum visibility and engagement.",
              },
              {
                step: "2",
                title: "Content Scheduling & Posting",
                description:
                  "We schedule and post content across your platforms at the most optimal times, ensuring consistency and relevance.",
              },
              {
                step: "3",
                title: "Audience Engagement",
                description:
                  "We respond to comments, messages, and mentions, building relationships and fostering community.",
              },
              {
                step: "4",
                title: "Monitoring & Reporting",
                description:
                  "We track engagement, reach, and follower growth, providing regular reports to keep your strategy on track.",
              },
              {
                step: "5",
                title: "Crisis Management & Reputation Monitoring",
                description:
                  "We respond to negative feedback and manage your online reputation to maintain a positive brand image.",
              },
              {
                step: "6",
                title: "Community Building & Growth",
                description:
                  "We implement targeted strategies to grow your community and connect with potential customers.",
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

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Why Choose Us for Social Media Management?
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
          <ul className="text-lg text-gray-600 dark:text-gray-400 space-y-4">
            <li>✅ Consistency: Aligned and branded content across platforms.</li>
            <li>✅ Expertise: Our team knows each platform inside out.</li>
            <li>✅ Time-Saving: You focus on business, we manage social media.</li>
            <li>✅ Performance-Driven: Strategies tracked, analyzed, and improved.</li>
          </ul>
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
            Ready to Take Your Social Media Presence to{" "}
            <span className="bg-gradient-to-t from-blue-500 to-white bg-clip-text text-transparent">
              the Next Level?
            </span>
          </motion.h2>
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
              Get Started Today
            </motion.a>
            <motion.a
              href="/book-consultation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              Contact Us for a Free Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
