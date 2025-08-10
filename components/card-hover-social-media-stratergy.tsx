import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverSocialMediaStratergy() {
  const approachSteps = [
    {
      title: "🎯 Understanding Your Business & Goals",
      description:
        "We start by getting to know your brand, audience, and objectives. Whether you want more visibility, traffic, or leads, we create a strategy tailored to you.",
      link: "#step1",
    },
    {
      title: "👥 Audience Research & Targeting",
      description:
        "We study your target audience’s behaviors, preferences, and pain points to ensure your content hits home.",
      link: "#step2",
    },
    {
      title: "📱 Platform Selection",
      description:
        "We identify the right platforms—Facebook, Instagram, LinkedIn, TikTok, or others—based on your audience and goals.",
      link: "#step3",
    },
    {
      title: "📝 Content Planning & Creation",
      description:
        "We design a content calendar that delivers consistent, engaging, and value-packed content for your audience.",
      link: "#step4",
    },
    {
      title: "🚀 Campaign Execution & Optimization",
      description:
        "We launch campaigns and continuously monitor, tweak, and improve them for top-tier performance.",
      link: "#step5",
    },
    {
      title: "📊 Analytics & Reporting",
      description:
        "You get detailed, transparent reports tracking engagement, traffic, conversions, and ROI.",
      link: "#step6",
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
            Our Approach to Strategy Development
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A step-by-step, proven methodology to craft impactful strategies that actually work.
          </p>
        </div>

        {/* HoverEffect Cards */}
        <div className="max-w-5xl mx-auto px-4">
          <HoverEffect items={approachSteps} />
        </div>
      </div>
    </section>
  );
}
