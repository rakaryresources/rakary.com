"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white pb-24 pt-36 px-6 sm:px-10 md:px-20 transition-colors duration-300">
      {/* Spotlight effect */}
      <Spotlight />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-4 px-4 py-1 rounded-full bg-black/5 dark:bg-white/10 text-sm font-medium text-black dark:text-white border border-black/10 dark:border-white/20 backdrop-blur-md">
          We've raised $50M in seed funding 🚀
        </div>

        {/* Headline */}
        <h1 style={{ textWrap: "balance" }} className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400">
          Generate Images, Text <br /> and Videos with AI
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
          Everything AI seamlessly integrated — all the modern AI generation
          tools in one platform so you can generate content with a single click.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition">
            Get started
          </button>
          <button className="text-black dark:text-white border border-black/10 dark:border-white/20 px-6 py-2 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition">
            Contact us →
          </button>
        </div>

        {/* Image */}
        <div className="mt-14 w-full max-w-6xl p-4 rounded-[32px] border-[18px] border-neutral-300 dark:border-neutral-800">
          <div className=" bg-white dark:bg-black rounded-[30px] shadow-lg border-neutral-200 dark:border-neutral-700 border">
            <img
              src="	https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Fheader.png&w=3840&q=75"
              alt="AI Dashboard preview"
              className="h-auto object-cover rounded-[10px]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-52 w-full bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:via-black/50 dark:to-black pointer-events-none scale-[1.1]" />
        </div>
      </div>
    </section>
  );
}
