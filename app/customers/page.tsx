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

  const testimonials = [
    {
      quote:
        "Working with Rakary has been a game-changer for our business. Their expertise in social media strategy and automation has helped us streamline our marketing efforts and achieve incredible results!",
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      image: "🚀",
      rating: 5,
    },
    {
      quote:
        "The team at Rakary really understands our brand and target audience. Their custom solutions have transformed the way we engage with our customers online.",
      name: "Michael Chen",
      company: "GrowthMind Inc.",
      image: "💡",
      rating: 5,
    },
    {
      quote:
        "Their data-driven approach and innovative strategies have helped us increase our ROI by 300%. Absolutely exceptional service!",
      name: "Emily Rodriguez",
      company: "Digital Pioneers",
      image: "📈",
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      title: "Social Media Strategy Success",
      description:
        "Increased engagement by 450% and drove 200% more qualified leads through strategic content planning and community management.",
      metric: "450% Engagement Growth",
      industry: "E-commerce",
      duration: "6 months",
    },
    {
      title: "Influencer Marketing for Brand Awareness",
      description:
        "Partnered with micro-influencers to achieve 2M+ reach and establish brand presence in new markets.",
      metric: "2M+ Reach",
      industry: "Fashion",
      duration: "3 months",
    },
    {
      title: "Lead Generation Results",
      description:
        "Implemented automated lead nurturing sequences that converted 35% more prospects into paying customers.",
      metric: "35% Conversion Increase",
      industry: "SaaS",
      duration: "4 months",
    },
  ];

  const clientLogos = [
    { name: "TechFlow", icon: "🔧" },
    { name: "GrowthMind", icon: "🧠" },
    { name: "Digital Pioneers", icon: "🚀" },
    { name: "InnovateCorp", icon: "💡" },
    { name: "NextGen Solutions", icon: "⚡" },
    { name: "FutureScale", icon: "📊" },
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
            Empowering{" "}
            <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
              Businesses
            </span>{" "}
            Driving Success
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Our Customers Are Our Success Stories
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12"
          >
            At Rakary, we are proud to work with a diverse range of clients
            across industries. Our customer-first approach has helped businesses
            of all sizes achieve measurable success through tailored marketing
            strategies and automation solutions.
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
              Become Our Next Success
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              View Our Services
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Client Testimonials */}
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
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've
              helped transform
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-8 bg-white dark:bg-black rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our case studies to see how we've helped clients overcome
              challenges and achieve remarkable growth
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-8 bg-white dark:bg-black rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {study.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Result:
                    </span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {study.metric}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Industry:
                    </span>
                    <span className="font-medium">{study.industry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Duration:
                    </span>
                    <span className="font-medium">{study.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Clients */}
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
              Trusted by Leading Brands
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're honored to have worked with companies across various
              sectors, from innovative startups to established enterprises
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group p-6 bg-white dark:bg-black rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 text-center"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {client.icon}
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                  {client.name}
                </p>
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
              { number: "500+", label: "Happy Clients" },
              { number: "250%", label: "Average ROI Increase" },
              { number: "95%", label: "Client Retention Rate" },
              { number: "50+", label: "Industries Served" },
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
              Join
            </span>{" "}
            Our Success Stories?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let's create your next chapter of growth and success. See what we
            can do for your business.
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
              Contact Us
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              Request a Demo
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              Join hundreds of satisfied clients worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl">🏆</div>
              <div className="text-2xl">🚀</div>
              <div className="text-2xl">💼</div>
              <div className="text-2xl">🌟</div>
              <div className="text-2xl">📈</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
