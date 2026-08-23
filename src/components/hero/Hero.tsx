"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CodeCard } from "./CodeCard";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Subtle emerald glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Hero Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm"
            >
              Software Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              I TURN IDEAS
              <br />
              INTO <span className="text-accent">SOFTWARE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg"
            >
              I build thoughtful web applications and explore technologies that
              turn ideas into useful experiences.
            </motion.p>

            {/* Small personal detail */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.27,
              }}
              className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />

              <span>Indonesia</span>

              <span className="text-border">·</span>

              <span>Building for the web</span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
              >
                View Projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>

          {/* Interactive Code Card */}
          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-md">
              <CodeCard />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-20 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent sm:mt-24"
        >
          <span>Scroll to explore</span>

          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
