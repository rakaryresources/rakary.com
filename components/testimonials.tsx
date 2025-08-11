"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Rakary.com has completely transformed our online presence. Their campaigns brought in more leads in one month than we had in the previous year.",
    name: "Manu Arora",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Absolutely revolutionary — Rakary's strategies gave our brand the visibility we always dreamed of. Game-changer for our industry.",
    name: "Bob Smith",
    role: "Industry Analyst",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "The ROI from Rakary’s marketing campaigns is unmatched. We cut ad spend by 30% while doubling our conversions.",
    name: "Eva Green",
    role: "Operations Director",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    quote:
      "They’ve saved us countless hours with their streamlined process. I recommend Rakary to anyone serious about growing their brand.",
    name: "Henry Ford",
    role: "E-commerce Owner",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    quote:
      "We launched a new product and Rakary’s creative team nailed the branding from day one. Customers loved it instantly.",
    name: "Tyler Durden",
    role: "Creative Director & Business Owner",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    quote:
      "I can’t imagine going back to running campaigns without Rakary’s data-driven approach.",
    name: "Cathy Lee",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    quote:
      "It’s like having a marketing superpower! They’ve helped us reach audiences we never thought were possible.",
    name: "David Wright",
    role: "Research Scientist",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    quote:
      "Rakary’s solutions fit perfectly into our workflow. Their content strategy boosted engagement across all platforms.",
    name: "Frank Moore",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    quote:
      "A must-have agency for any growing business. They’ve completely changed how we approach customer acquisition.",
    name: "Ivy Wilson",
    role: "Business Consultant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Their team is creative, professional, and results-driven. Even our non-digital team members now understand marketing better.",
    name: "Grace Hall",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    quote:
      "The results from our campaigns have consistently exceeded expectations. Our sales pipeline is now full months ahead.",
    name: "Jack Brown",
    role: "Performance Manager",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    quote:
      "Rakary took the time to understand our vision and turned it into a campaign that connected perfectly with our audience.",
    name: "Alice Johnson",
    role: "Senior Marketing Executive",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 pt-36 bg-white dark:bg-black">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
      >
        Loved by thousands of{" "}
        <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
          people{" "}
        </span>
      </motion.h2>

      <p className="text-center text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300 mb-12">
        Hear what our clients say about{" "}
        <span className="font-semibold text-black dark:text-white">
          Rakary.com
        </span>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-6">
              “{t.quote}”
            </p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {t.name}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
