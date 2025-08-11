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
    "https://cdn-icons-png.flaticon.com/512/3062/3062634.png", // Brand voice
    "https://cdn-icons-png.flaticon.com/512/1484/1484581.png", // Content planning
    "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", // Creative design
    "https://cdn-icons-png.flaticon.com/512/3176/3176361.png", // Platform-specific
    "https://cdn-icons-png.flaticon.com/512/869/869636.png", // Engagement
    "https://cdn-icons-png.flaticon.com/512/1828/1828765.png", // Optimization
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
            className="text-6xl sm:text-6xl md:text-7xl font-extrabold text-center leading-tight mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
          >
            Social Media{" "}
            <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
              Content Creation
            </span>
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Create Compelling Content That Resonates with Your Audience
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12"
          >
            Great content is the backbone of any successful social media
            strategy. We specialize in creating high-quality, engaging content
            that captivates your audience and builds lasting connections with
            your brand. From eye-catching visuals to powerful copy, our team
            crafts content that tells your story and drives results.
          </motion.p>
        </motion.div>
      </section>

      {/* Why Content Matters */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Why Social Media Content Matters
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Content is the primary way you communicate with your audience on
              social media. Whether it’s a post, story, or video, your content
              needs to be informative, engaging, and aligned with your brand’s
              voice. Done right, it boosts engagement, strengthens brand
              awareness, and encourages conversions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Approach to Content Creation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A step-by-step methodology to craft impactful, engaging content
              that speaks directly to your audience.
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
              {
                step: "1",
                title: "Understanding Your Brand Voice & Goals",
                description:
                  "We take the time to understand your brand’s identity, values, and marketing goals to ensure all content aligns perfectly with your image.",
              },
              {
                step: "2",
                title: "Content Planning & Strategy",
                description:
                  "We create a detailed content calendar covering what to post, when, and how to engage — blending educational, promotional, and entertaining posts.",
              },
              {
                step: "3",
                title: "Creative Design & Copywriting",
                description:
                  "From visuals to captions, we ensure each piece is visually appealing, on-brand, and crafted to stand out in the crowded feed.",
              },
              {
                step: "4",
                title: "Platform-Specific Content",
                description:
                  "We tailor content to each platform — Instagram’s visuals, Twitter’s concise updates, LinkedIn’s professional posts — to maximize impact.",
              },
              {
                step: "5",
                title: "Engagement & Community Building",
                description:
                  "We interact with your audience post-publishing, fostering a loyal and engaged community.",
              },
              {
                step: "6",
                title: "Content Optimization & Performance Tracking",
                description:
                  "We monitor analytics, identify what works best, and optimize future content for even better results.",
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

      {/* Types of Content */}
      <section className="bg-white dark:bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Types of Content We Create
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              "Graphics & Visuals",
              "Videos",
              "Blog Posts & Articles",
              "Stories & Interactive Posts",
              "User-Generated Content",
            ].map((type, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {type}
                </h3>
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
            Want to create content that{" "}
            <span className="bg-gradient-to-t from-blue-500 to-white bg-clip-text text-transparent">
              truly connects
            </span>{" "}
            with your audience?
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/get-started"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
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
