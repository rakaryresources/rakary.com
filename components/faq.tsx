"use client";

import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, easeInOut } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: `We specialize in a range of marketing and automation services, including:
    - Social Media Strategy Development
    - Social Media Content Creation
    - Social Media Management
    - Social Media Ads Management
    - Influencer Marketing
    - Branding and Design Services
    - Lead Generation`,
  },
  {
    question: "How can marketing automation benefit my business?",
    answer:
      "Marketing automation helps you save time, increase efficiency, and deliver personalized experiences to your customers. By automating repetitive tasks, you can focus on high-level strategies that drive growth.",
  },
  {
    question: "Do you offer customized solutions?",
    answer:
      "Yes, we understand that every business is unique. We offer tailored marketing and automation solutions that align with your specific goals and challenges.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "The timeline for seeing results depends on the specific service and your business goals. Typically, we start seeing measurable outcomes within a few months, depending on the strategy implemented.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes, we work with businesses of all sizes—whether you're a startup looking to grow or an established company wanting to optimize your marketing strategies.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience working across various industries, including e-commerce, healthcare, finance, education, and more. We tailor our services to meet the needs of your industry.",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "To get started, simply Contact Us or Book a Demo. Our team will schedule a call to discuss your goals and create a customized plan for your business.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing based on the services and level of support you need. Contact us for a personalized quote.",
  },
  {
    question: "Can I track the results of my campaigns?",
    answer:
      "Absolutely! We provide detailed reports and analytics so you can track the success of your campaigns and measure the return on investment (ROI).",
  },
  {
    question: "How do I get in touch with your team?",
    answer:
      "You can reach us by filling out our Contact Form, emailing us at [Your Email], or calling [Your Phone Number]. We’re always here to help!",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeInOut },
  },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto bg-white dark:bg-black">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
      >
        Frequently{" "}
        <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
          Asked{" "}
        </span>
        Questions
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-700 dark:text-gray-300 mt-4 max-w-xl mx-auto text-center"
      >
        We know you may have questions about our services and how we can help
        your business. Below are answers to some of the most commonly asked
        questions.
      </motion.p>

      {/* FAQ List */}
      <motion.div
        className="bg-white dark:bg-[#0d0d0d] p-6 mt-8 rounded-[25px] shadow-lg space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-[#111] rounded-xl shadow-md p-6 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium text-lg text-black dark:text-white">
                {faq.question}
              </span>
              <span className="text-blue-300">
                {openIndex === index ? <FaTimes /> : <FaPlus />}
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm whitespace-pre-line">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-lg font-medium text-black dark:text-white">
          Have more questions? Reach out to us today, and we’ll be happy to
          assist you!
        </p>
      </motion.div>
    </section>
  );
}
