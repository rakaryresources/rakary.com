"use client";

import React from "react"
import MaskedDiv from "./ui/masked-div"
import { motion } from "framer-motion";

export function MaksedDivDemo() {
  return (
    <div className="items-between m-auto flex max-w-5xl flex-wrap justify-between gap-5">
       <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
      >
        Bringing Ideas to{" "}
        <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
          Life with Powerful{" "}
        </span>
        Visuals.
      </motion.h2>
      <MaskedDiv maskType="type-1" size={0.45} className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="/video/1vd.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-1" size={0.45} className="rotate-180 ">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="/video/2vd.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-3" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="/video/3vd.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-4" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-2" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
    </div>
  )
}

