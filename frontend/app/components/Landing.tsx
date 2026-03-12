"use client";

import { useEffect, useRef, useState, ReactNode, RefObject } from "react";
import { Playfair_Display, Outfit, Space_Mono } from "next/font/google";
import { motion, useScroll, useInView, Variants } from "framer-motion";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Zap, 
  Sparkles, 
  Rocket, 
  Target, 
  BarChart3, 
  GitBranch,
  LucideIcon
} from "lucide-react";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

// ─── Animation Variants ────────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants: Variants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rotatingVariants: Variants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface FeatureProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
  delay: number;
}

interface StoryStep {
  number: string;
  title: string;
  description: string;
  visual: string;
}

interface Stat {
  value: string;
  label: string;
}

type ScrollAnimationReturn = {
  ref: RefObject<HTMLDivElement | null>;
  isInView: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES: FeatureProps[] = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    desc: "Connect your repositories in seconds. Your journey starts here.",
    gradient: "from-red-600 to-red-700",
    delay: 0,
  },
  {
    icon: Target,
    title: "Crystal Clear Vision",
    desc: "Transform chaos into structure. Every milestone mapped out.",
    gradient: "from-blue-600 to-blue-700",
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: "Real-Time Clarity",
    desc: "Watch your progress unfold. Data that tells your story.",
    gradient: "from-red-500 to-blue-600",
    delay: 0.2,
  },
  {
    icon: GitBranch,
    title: "GitHub Harmony",
    desc: "Your commits, PRs, and metrics in perfect harmony.",
    gradient: "from-slate-700 to-slate-900",
    delay: 0.3,
  },
];

const STORY_STEPS: StoryStep[] = [
  {
    number: "01",
    title: "The Problem",
    description: "Your team is drowning in scattered metrics. GitHub here, Jira there, roadmaps in a spreadsheet. Nobody knows if you're on track.",
    visual: "🌊",
  },
  {
    number: "02",
    title: "The Discovery",
    description: "Map_pilot appears. One dashboard. All your metrics. All your progress. Suddenly, clarity emerges from the noise.",
    visual: "💡",
  },
  {
    number: "03",
    title: "The Transformation",
    description: "Your team moves faster. Decisions come quicker. Everyone sees the same picture. Shipping accelerates.",
    visual: "🚀",
  },
  {
    number: "04",
    title: "The Victory",
    description: "Ambitious goals become shipped products. Map_pilot wasn't just a tool—it was your competitive advantage.",
    visual: "🏆",
  },
];

const STATS: Stat[] = [
  { value: "50k+", label: "Teams Shipped More" },
  { value: "10M+", label: "Metrics Tracked" },
  { value: "99.9%", label: "Uptime Promise" },
  { value: "0", label: "Hours Wasted" },
];

// ─── Custom Hook ────────────────────────────────────────────────────────────
function useScrollAnimation(): ScrollAnimationReturn {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return {
  isInView,
   ref,
};
}

// ─── Feature Card Component ────────────────────────────────────────────────────
function FeatureCard({ icon: Icon, title, desc, gradient, delay }: FeatureProps): ReactNode {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-200 p-8 transition-all"
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Icon */}
      <motion.div
        className={`relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon size={28} strokeWidth={1.5} />
      </motion.div>

      {/* Content */}
      <h3 className="relative font-playfair font-bold text-2xl text-slate-900 mb-3 z-10">
        {title}
      </h3>
      <p className="relative font-outfit text-sm text-slate-600 leading-relaxed mb-4 z-10">
        {desc}
      </p>

      <div className="relative inline-flex items-center gap-2 text-sm font-semibold text-red-600 group-hover:translate-x-1 transition-transform z-10">
        Discover more <ArrowRight size={16} />
      </div>
    </motion.div>
  );
}

// ─── Story Card Component ────────────────────────────────────────────────────
interface StoryCardProps extends StoryStep {
  index: number;
}

function StoryCard({ number, title, description, visual, index }: StoryCardProps): ReactNode {
  const { ref, isInView } = useScrollAnimation();
  const isEven = parseInt(number) % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      transition={{ delay: 0.1 }}
      className="mb-20 grid gap-12 md:grid-cols-2 items-center"
    >
      {/* Text side */}
      <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
        <motion.span
          className="inline-block font-mono text-4xl font-bold text-red-600 mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {number}
        </motion.span>

        <h3 className="font-playfair text-4xl font-bold text-slate-900 mb-6">
          {title}
        </h3>

        <p className="font-outfit text-lg text-slate-600 leading-relaxed mb-8">
          {description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 font-outfit font-semibold text-white transition-all hover:shadow-xl"
        >
          Learn more <ArrowRight size={18} />
        </motion.button>
      </div>

      {/* Visual side */}
      <motion.div
        className={`${isEven ? "md:order-1" : "md:order-2"}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div
          className="flex items-center justify-center h-64 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 text-7xl"
          animate="float"
          variants={floatingVariants}
        >
          {visual}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─── Stat Card Component ────────────────────────────────────────────────────
interface StatCardProps extends Stat {
  index: number;
}

function StatCard({ value, label, index }: StatCardProps): ReactNode {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleInVariants}
      transition={{ delay: index * 0.1 }}
      className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200"
    >
      <motion.p
        className="font-playfair text-5xl font-bold text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2 + index * 0.1 }}
      >
        {value}
      </motion.p>
      <p className="font-outfit text-sm text-slate-600 font-medium">{label}</p>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function StorytellingLanding(): ReactNode {
  const { scrollY } = useScroll();
  const [navBgOpacity, setNavBgOpacity] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest: number) => {
      setNavBgOpacity(Math.min(latest / 100, 1));
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className={`min-h-screen bg-white overflow-x-hidden ${outfit.variable} ${playfair.variable} ${spaceMono.variable}`}>
      <style>{`
        * {
          font-family: inherit;
        }
      `}</style>

      {/* ── Animated Background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top-right orb */}
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-red-200 to-red-50 blur-3xl opacity-50"
          animate="rotate"
          variants={rotatingVariants}
        />

        {/* Bottom-left orb */}
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200 to-blue-50 blur-3xl opacity-50"
          animate="rotate"
          variants={rotatingVariants}
          transition={{ delay: 0.5 }}
        />

        {/* Center floating orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-slate-100 to-white blur-3xl opacity-30"
          animate="float"
          variants={floatingVariants}
          style={{ x: "-50%", y: "-50%" }}
        />
      </div>

      {/* ── Navbar ── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-slate-200"
        style={{ 
          backgroundColor: `rgba(255, 255, 255, ${navBgOpacity})`,
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center flex-shrink-0">
              <Zap className="text-white" size={22} strokeWidth={3} />
            </div>
            <span className="font-playfair text-xl font-bold text-slate-900">
              Map<span className="text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">Pilot</span>
            </span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Story", "Pricing", "Docs"].map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="font-outfit text-sm font-medium text-slate-700 hover:text-red-600 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-red-600 to-blue-600 px-6 py-2 font-outfit text-sm font-bold text-white shadow-lg hover:shadow-2xl transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Main Content ── */}
      <main className="relative z-10">

        {/* ─ Hero Section ─ */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            {/* Floating badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border-2 border-red-200 bg-red-50 px-5 py-2 mb-8"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-red-600"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-outfit text-xs font-bold text-red-600 tracking-wide">
                Now in public beta
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 text-slate-900"
            >
              <span>Clarity in</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text">
                every metric
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-outfit text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Your team is shipping incredible things. But scattered metrics hide the full story. Map_pilot brings it all together—one dashboard, infinite clarity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-10 py-4 font-outfit text-lg font-bold text-white shadow-xl"
              >
                Start Free Trial →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border-2 border-slate-300 px-10 py-4 font-outfit text-lg font-bold text-slate-900 hover:border-red-600 hover:bg-red-50 transition-colors"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Floating shapes */}
            <motion.div
              variants={itemVariants}
              className="mt-20 flex gap-8 items-center justify-center flex-wrap"
            >
              {[
                { icon: Sparkles, label: "Smart Planning" },
                { icon: Target, label: "Clear Goals" },
                { icon: Rocket, label: "Fast Shipping" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate="float"
                  variants={floatingVariants}
                  transition={{ delay: i * 0.3 }}
                  className="flex items-center gap-2 font-outfit text-sm text-slate-600"
                >
                  <item.icon size={20} className="text-red-600" />
                  {item.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ─ The Story Section ─ */}
        <section className="px-6 py-20 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="font-mono text-xs font-bold text-red-600 tracking-widest uppercase">
                A Tale of Transformation
              </span>
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
                Four chapters to
                <br />
                <span className="text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">
                  shipping faster
                </span>
              </h2>
              <p className="font-outfit text-lg text-slate-600 max-w-2xl mx-auto">
                Every team has a story. Here&apos;s the Map_pilot chapter of yours.
              </p>
            </motion.div>

            {/* Story cards */}
            {STORY_STEPS.map((step, i) => (
              <StoryCard key={i} {...step} index={i} />
            ))}
          </div>
        </section>

        {/* ─ Features Grid ─ */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="font-mono text-xs font-bold text-blue-600 tracking-widest uppercase">
                Powerful Features
              </span>
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
                Built for teams
                <br />
                <span className="text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">
                  that ship
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature, i) => (
                <FeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* ─ Stats Section ─ */}
        <section className="px-6 py-20 bg-gradient-to-r from-red-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Impact by the numbers
              </h2>
              <p className="font-outfit text-lg text-slate-600">
                What our users have achieved with Map_pilot.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <StatCard key={i} {...stat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─ Final CTA ─ */}
        <section className="px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-red-600 via-red-500 to-blue-600 p-16 text-center shadow-2xl"
          >
            <motion.h2
              className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to transform
              <br />
              your workflow?
            </motion.h2>

            <motion.p
              className="font-outfit text-xl text-white/90 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join thousands of teams shipping more, faster. Your clarity starts today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-white px-10 py-4 font-outfit text-lg font-bold text-red-600 shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started — Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border-2 border-white px-10 py-4 font-outfit text-lg font-bold text-white hover:bg-white/10 transition-all"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t-2 border-slate-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Security", "API Docs"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Blog", "Community", "Support"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press Kit", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Cookie Policy", "Compliance"],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-playfair font-bold text-slate-900 mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="font-outfit text-sm text-slate-600 hover:text-red-600 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="border-t-2 border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Zap className="text-white" size={18} />
              </div>
              <p className="font-outfit text-sm text-slate-600">
                © 2025 Map_pilot. Built with clarity.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-slate-600 hover:text-red-600 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}