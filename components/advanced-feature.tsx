"use client";

import React from "react";
import { useId } from "react";
import { motion } from "framer-motion";

export function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40">
        <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text"
      >
        Wide range of{" "}
        <span className="font-extrabold bg-gradient-to-t from-blue-500 to-gray-200 bg-clip-text text-transparent dark:from-blue-400 dark:to-gray-300">
          Features{" "}
        </span>
        with Provide.
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Tailored Marketing Strategies",
    description:
      "We craft personalized marketing strategies designed to elevate your brand, reach your target audience, and achieve measurable growth.",
  },
  {
    title: "Creative Content Production",
    description:
      "From eye-catching visuals to compelling copy, we create content that resonates with your audience and strengthens your brand identity.",
  },
  {
    title: "Data-Driven Campaigns",
    description:
      "Our decisions are backed by data and insights, ensuring every campaign delivers maximum ROI and tangible results.",
  },
  {
    title: "Brand Identity & Positioning",
    description:
      "We help shape your brand story, voice, and visual identity to make a lasting impact in a competitive marketplace.",
  },
  {
    title: "SEO & Digital Visibility",
    description:
      "Boost your online presence with optimized strategies that improve rankings, drive traffic, and attract the right customers.",
  },
  {
    title: "Social Media Growth",
    description:
      "We manage and grow your social media channels with engaging content, targeted campaigns, and active community building.",
  },
  {
    title: "Advertising & Paid Media",
    description:
      "Reach a wider audience with expertly managed ad campaigns across platforms like Google, Facebook, Instagram, and LinkedIn.",
  },
  {
    title: "Marketing Consultation",
    description:
      "Get expert advice and actionable strategies tailored to your business goals, industry, and audience needs.",
  },
];


export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
