import React from "react";
import { TextScroll } from "./ui/text-scroll";

export default function TextScrollComponent() {
  return (
    <div className="py-6">
      <TextScroll
        text="Rakary.com"
        className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400"
      />
    </div>
  );
}
