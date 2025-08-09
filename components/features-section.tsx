"use client";

import { cn } from "@/lib/utils";
import {
  Upload,
  Search,
  Brain,
  BarChart3,
  MessageSquare,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: <Image src="/images/upload.png" alt="Cloud upload" width={38} height={38} />,
    title: "Smart Upload",
    description:
      "Drag and drop any financial report. Our AI instantly processes and extracts key information.",
  },
  {
    icon: <Image src="/images/search.png" alt="Search icon" width={38} height={38} />,
    title: "Company Search",
    description:
      "Search thousands of public company reports with real-time data and automatic updates.",
  },
  {
    icon: <Image src="/images/brain.png" alt="Brain AI icon" width={38} height={38} />,
    title: "AI Analysis",
    description:
      "Get intelligent summaries, risk assessments, and trend analysis powered by advanced LLMs.",
  },
  {
    icon: <Image src="/images/chart.png" alt="chart" width={38} height={38} />,
    title: "Visual Insights",
    description:
      "Interactive charts and graphs that make complex financial data easy to understand.",
  },
  {
    icon: <Image src="/images/chat.png" alt="Chat icon" width={38} height={38} />,
    title: "Q&A Chat",
    description:
      "Ask questions about any report and get instant, accurate answers with source citations.",
  },
  {
    icon: (
      <Image src="/images/padlock.png" alt="Padlock security" width={38} height={38} />
    ),
    title: "Enterprise Security",
    description:
      "Bank-grade security with SOC 2 compliance and encrypted data processing.",
  },
];

export function Features() {
  return (
    <section className="relative py-24 md:py-32 dark:bg-black bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need for financial analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful AI tools designed for analysts, investors, and finance
            professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Feature {...feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-start h-full py-10 px-6 relative group/feature border-b border-neutral-200 dark:border-neutral-800",

        // Add left and right borders only for large screens
        "lg:border-r",
        (index === 0 || index === 3) && "lg:border-l"
      )}
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/feature:opacity-100 transition duration-200">
        <div
          className={cn(
            "absolute inset-0 h-full w-full pointer-events-none",
            index < 3 ? "bg-gradient-to-t" : "bg-gradient-to-b",
            "from-neutral-100 dark:from-neutral-900 to-transparent"
          )}
        />
      </div>

      {/* Icon */}
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="pl-4 group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 flex-grow">
        {description}
      </p>
    </div>
  );
};
