"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const AboutSection = () => {
  const services = [
    {
      title: "Social Media Strategy Development",
      description:
        "We craft tailored strategies to elevate your brand's presence and connect with your ideal audience.",
      image: "/images/about1.jpg",
    },
    {
      title: "Social Media Content Creation",
      description:
        "Engaging, high-quality, and share-worthy content designed to captivate and convert.",
      image: "/images/about2.jpg",
    },
    {
      title: "Social Media Management",
      description:
        "Complete management of your social channels to ensure consistent growth and engagement.",
      image: "/images/about3.jpg",
    },
    {
      title: "Social Media Ads Management",
      description:
        "Targeted ad campaigns that drive traffic, boost conversions, and maximize ROI.",
      image: "/images/about4.jpg",
    },
    {
      title: "Influencer Marketing",
      description:
        "Partnering with trusted influencers to expand your reach and build brand credibility.",
      image: "/images/about5.jpg",
    },
    {
      title: "Branding & Design Services",
      description:
        "Creating memorable, visually stunning brand identities that leave a lasting impression.",
      image: "/images/about6.jpg",
    },
    {
      title: "Lead Generation",
      description:
        "Delivering high-quality leads to fuel your sales pipeline and accelerate growth.",
      image: "/images/about7.jpg",
    },
  ];

  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
        >
          Transform Your Business with{" "}
          <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
            Rakary
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          At{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">
            Rakary
          </span>
          , we help businesses accelerate growth, streamline operations, and
          drive success through powerful marketing strategies and automation
          technologies.
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-16"
        >
          In today's fast-paced digital world, efficiency is key. Our expert
          team combines the latest in marketing innovation with advanced
          automation tools to deliver customized solutions that elevate your
          business. Whether you're looking to optimize campaigns, enhance
          engagement, or boost lead generation, <strong>Rakary</strong> has you
          covered.
        </motion.p>

        {/* What We Do */}
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          What We Do
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <CardSpotlight
              className="h-[420px] w-full overflow-hidden"
              key={index}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                className="relative z-20 flex flex-col h-full rounded-xl overflow-hidden shadow-lg"
              >
                {/* Service Image */}
                <div className="relative w-full h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Service Content */}
                <div className="flex flex-col flex-grow p-4 bg-white dark:bg-neutral-800">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </CardSpotlight>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-2xl font-bold mb-4"
        >
          Why Choose Rakary?
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-16 space-y-2"
        >
          <li>
            Proven track record of success with clients across diverse
            industries.
          </li>
          <li>
            Tailored solutions designed to meet your unique business needs.
          </li>
          <li>A passionate team committed to your growth.</li>
        </motion.ul>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center bg-blue-50 dark:bg-neutral-600 p-10 rounded-xl shadow-lg"
        >
          <p className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Ready to take your business to the next level with{" "}
            <span className="text-blue-500 dark:text-blue-400">Rakary</span>?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition border-2 border-black">
              Book a Demo
            </button>
            <button className="bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg shadow hover:bg-gray-200 dark:hover:bg-neutral-500 transition border-2 border-white">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
