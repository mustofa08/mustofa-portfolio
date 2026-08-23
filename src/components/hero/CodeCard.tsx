"use client";

import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const codeSnippets = [
  {
    filename: "profile.ts",
    lines: [
      {
        code: "const mustofa = {",
        color: "text-foreground",
      },
      {
        code: '  name: "Mustofa",',
        color: "text-accent",
      },
      {
        code: '  role: "Software Developer",',
        color: "text-accent",
      },
      {
        code: '  focus: "Web Development",',
        color: "text-accent",
      },
      {
        code: "};",
        color: "text-foreground",
      },
    ],
  },
  {
    filename: "stack.ts",
    lines: [
      {
        code: "const stack = [",
        color: "text-foreground",
      },
      {
        code: '  "Next.js",',
        color: "text-accent",
      },
      {
        code: '  "NestJS",',
        color: "text-accent",
      },
      {
        code: '  "PostgreSQL",',
        color: "text-accent",
      },
      {
        code: "];",
        color: "text-foreground",
      },
    ],
  },
  {
    filename: "mindset.ts",
    lines: [
      {
        code: "const mindset = {",
        color: "text-foreground",
      },
      {
        code: "  learn: true,",
        color: "text-accent",
      },
      {
        code: "  build: true,",
        color: "text-accent",
      },
      {
        code: '  improve: "always",',
        color: "text-accent",
      },
      {
        code: "};",
        color: "text-foreground",
      },
    ],
  },
];

export function CodeCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const current = codeSnippets[activeIndex];

  const nextSlide = () => {
    setDirection(1);

    setActiveIndex((currentIndex) => {
      return (currentIndex + 1) % codeSnippets.length;
    });
  };

  // Automatic slide
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.button
      type="button"
      onClick={nextSlide}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -4,
        rotateX: 2,
        rotateY: -2,
      }}
      whileTap={{
        scale: 0.985,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative w-full cursor-pointer text-left outline-none"
      aria-label="Explore Mustofa's profile"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:border-accent/40">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-muted">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(codeSnippets.length).padStart(2, "0")}
            </span>

            <span className="font-mono text-[10px] text-muted">
              {current.filename}
            </span>
          </div>
        </div>

        {/* Code */}
        <div className="relative min-h-[250px] p-6 sm:min-h-[280px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="font-mono text-xs leading-7 sm:text-sm"
            >
              {current.lines.map((line, index) => (
                <div key={`${activeIndex}-${index}`} className="flex">
                  <span className="mr-5 w-5 select-none text-right text-muted/40">
                    {index + 1}
                  </span>

                  <span className={line.color}>{line.code}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              {isHovered ? "Paused" : "Interactive"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-muted transition-colors duration-300 group-hover:text-accent">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
              Click to explore
            </span>

            <MousePointer2 size={13} />
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden bg-border">
          <motion.div
            key={activeIndex}
            initial={{ width: "0%" }}
            animate={{
              width: isHovered ? "0%" : "100%",
            }}
            transition={{
              duration: isHovered ? 0 : 4,
              ease: "linear",
            }}
            className="h-full bg-accent"
          />
        </div>
      </div>
    </motion.button>
  );
}
