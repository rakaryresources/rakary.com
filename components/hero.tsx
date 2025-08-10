"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white pb-24 pt-36 px-6 sm:px-10 md:px-20 transition-colors duration-300">
      {/* Spotlight effect */}
      <Spotlight />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textWrap: "balance" }}
          className="text-6xl sm:text-6xl md:text-7xl font-extrabold text-center leading-tight mb-4 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
        >
          Elevate your{" "}
          <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
            Brand
          </span>{" "}
          with Us.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-700 dark:text-neutral-300"
        >
          Rakary.com empowers influencers and brands to connect, create, and
          convert. From content strategy to lead generation, we help you stand
          out and succeed in the digital world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <Link
            href="/contact"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition inline-flex items-center justify-center"
          >
            Contact US →
          </Link>
        </motion.div>

        {/* Image / Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="mt-14 w-full max-w-6xl p-4 rounded-[32px] border-[18px] border-neutral-300 dark:border-neutral-800"
        >
          <div className=" bg-white dark:bg-black rounded-[30px] shadow-lg border-neutral-200 dark:border-neutral-700 border">
            <video
              src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-auto object-cover rounded-[10px] w-full"
              poster="/images/preview.jpg"
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-52 w-full bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:via-black/50 dark:to-black pointer-events-none scale-[1.1]" />
        </motion.div>
      </div>
    </section>
  );
}
