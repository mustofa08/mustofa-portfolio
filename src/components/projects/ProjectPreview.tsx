"use client";

import Image from "next/image";
import { Layers3 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import type { Project } from "@/data/projects";

type ProjectPreviewProps = {
  project: Project;
};

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div
      className="
        relative
        min-h-[360px]
        border-t
        border-border
        bg-background
        lg:min-h-0
        lg:border-l
        lg:border-t-0
      "
    >
      {/* =================================================
          BROWSER FRAME
      ================================================= */}

      <div
        className="
          absolute
          inset-5
          flex
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-background
          shadow-xl
          shadow-black/[0.04]
          sm:inset-7
        "
      >
        {/* =================================================
            BROWSER HEADER
        ================================================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-border
            bg-surface
            px-4
            py-3
          "
        >
          {/* Window controls */}

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>

          {/* Project name */}

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={project.id}
              initial={{
                opacity: 0,
                x: 8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -8,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                max-w-[55%]
                truncate
                font-mono
                text-[9px]
                text-muted
              "
            >
              {project.title.toLowerCase().replaceAll(" ", "-")}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* =================================================
            SCREENSHOT
        ================================================= */}

        <div
          className="
            relative
            min-h-0
            flex-1
            overflow-hidden
            bg-background
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                x: 24,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -24,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-background
              "
            >
              {project.image ? (
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="
                      object-contain
                      p-3
                      transition-transform
                      duration-700
                      hover:scale-[1.01]
                    "
                  />
                </div>
              ) : (
                <div
                  className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    bg-background
                  "
                >
                  <div className="text-center">
                    <div
                      className="
                        mx-auto
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-accent/30
                        bg-accent/10
                        text-accent
                      "
                    >
                      <Layers3 size={24} strokeWidth={1.5} />
                    </div>

                    <p className="mt-4 text-sm font-medium text-foreground">
                      {project.title}
                    </p>

                    <p
                      className="
                        mt-1
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-muted
                      "
                    >
                      Screenshot coming soon
                    </p>
                  </div>
                </div>
              )}

              {/* =================================================
                  SUBTLE FADE
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-background/10
                  via-transparent
                  to-transparent
                "
              />

              {/* =================================================
                  TOP HIGHLIGHT
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-accent/15
                "
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
