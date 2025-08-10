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

  const services = [
    {
      step: "1",
      title: "Ad Strategy Development",
      description:
        "We work closely with you to understand your business objectives and design a customized ad strategy that aligns with your goals. From audience targeting to budget allocation, we ensure every ad campaign is optimized for success.",
      icon: "🎯",
    },
    {
      step: "2",
      title: "Ad Creative & Copywriting",
      description:
        "Our creative team develops eye-catching visuals and persuasive copy that grab attention and drive action. Whether it's a carousel ad, video, or static image, we ensure your ads stand out in crowded social media feeds.",
      icon: "🎨",
    },
    {
      step: "3",
      title: "Audience Targeting & Segmentation",
      description:
        "We leverage detailed targeting options to reach your ideal audience based on factors like location, age, interests, behaviors, and more. Our goal is to ensure your ads are seen by people who are most likely to engage with your brand.",
      icon: "👥",
    },
    {
      step: "4",
      title: "Ad Campaign Management & Optimization",
      description:
        "We continuously monitor and adjust your campaigns to ensure they are delivering the best possible results. Our team analyzes key metrics such as CTR, conversion rates, and ROAS to optimize your ads for maximum effectiveness.",
      icon: "📊",
    },
    {
      step: "5",
      title: "A/B Testing & Experimentation",
      description:
        "We run A/B tests to determine the best-performing ad creatives, copy, and targeting. By testing various elements, we fine-tune your campaigns to ensure they're performing at their highest potential.",
      icon: "🧪",
    },
    {
      step: "6",
      title: "Analytics & Reporting",
      description:
        "We provide detailed reports on ad performance, including insights into engagement, conversions, and overall campaign success. We believe in transparency, so you always know how your ad dollars are being spent.",
      icon: "📈",
    },
  ];

  const benefits = [
    {
      title: "Data-Driven Approach",
      description:
        "We use data and insights to continually improve and optimize ad campaigns, ensuring high performance and maximum ROI.",
      icon: "📊",
      stats: "300% ROAS Average",
    },
    {
      title: "Targeted Advertising",
      description:
        "Reach the right people with precision-targeted campaigns designed to maximize engagement and conversions.",
      icon: "🎯",
      stats: "95% Accuracy Rate",
    },
    {
      title: "Expert Management",
      description:
        "Our experienced team stays on top of the latest trends, updates, and best practices to ensure your ads stay competitive.",
      icon: "👨‍💻",
      stats: "10+ Years Experience",
    },
    {
      title: "Measurable Results",
      description:
        "Track the success of your ads with clear, actionable data to make informed decisions and drive continuous improvement.",
      icon: "📈",
      stats: "Real-Time Analytics",
    },
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", users: "2.9B+ Users" },
    { name: "Instagram", icon: "📷", users: "2B+ Users" },
    { name: "LinkedIn", icon: "💼", users: "900M+ Users" },
    { name: "Twitter", icon: "🐦", users: "450M+ Users" },
    { name: "TikTok", icon: "🎵", users: "1B+ Users" },
    { name: "YouTube", icon: "📹", users: "2.7B+ Users" },
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
            Drive Targeted{" "}
            <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
              Results
            </span>{" "}
            with Expert Ads
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Social Media Ads Management That Converts
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12"
          >
            Social media advertising is one of the most powerful ways to reach
            your target audience and drive conversions. At Rakary, we specialize
            in creating, managing, and optimizing paid social media campaigns
            that deliver measurable results. Whether you're looking to increase
            brand awareness, generate leads, or drive sales, we have the
            expertise to help you achieve your goals with precision and
            efficiency.
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
              Start Your Campaign
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              Free Strategy Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Ads Matter */}
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
              Why Social Media Ads Matter
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Social media ads allow you to target specific audiences based on
              demographics, interests, behaviors, and more. With the right
              strategy, you can expand your reach, generate high-quality leads,
              and maximize your return on ad spend (ROAS). Running ads on
              platforms like Facebook, Instagram, LinkedIn, and Twitter ensures
              your message is seen by the right people at the right time.
            </p>
          </motion.div>

          {/* Platforms Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center p-6 bg-white dark:bg-black rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {platform.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {platform.users}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
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
              Our Ads Management Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions to maximize your advertising ROI
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-4">
                    {service.step}
                  </div>
                  <div className="text-4xl">{service.icon}</div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "300%", label: "Average ROAS Increase" },
              { number: "85%", label: "Conversion Rate Improvement" },
              { number: "50%", label: "Cost Per Lead Reduction" },
              { number: "24/7", label: "Campaign Monitoring" },
            ].map((stat, index) => (
              <motion.div key={index} variants={scaleIn} className="p-6">
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

      {/* Benefits */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
              Why Choose{" "}
              <span className="bg-gradient-to-t from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Rakary
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We deliver exceptional results through strategic planning and
              expert execution
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-8 bg-white dark:bg-black rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            <span className="bg-gradient-to-t from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Drive Results
            </span>{" "}
            with Social Media Ads?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let's create high-performing ad campaigns that deliver measurable
            ROI and accelerate your business growth.
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
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              Book Free Ad Strategy Consultation
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              Trusted by businesses worldwide for exceptional ad performance
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl">🎯</div>
              <div className="text-2xl">📊</div>
              <div className="text-2xl">💰</div>
              <div className="text-2xl">🚀</div>
              <div className="text-2xl">📈</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
