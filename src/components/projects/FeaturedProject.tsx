"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import type { Project } from "@/data/projects";

import { ProjectPreview } from "./ProjectPreview";

type FeaturedProjectProps = {
  project: Project;
  totalProjects: number;
  isPaused: boolean;
  onProjectSelect: (project: Project) => void;
};

export function FeaturedProject({
  project,
  totalProjects,
  isPaused,
  onProjectSelect,
}: FeaturedProjectProps) {
  const isInProgress = project.status === "In Progress";

  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        shadow-sm
      "
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* =================================================
            PROJECT INFORMATION
        ================================================= */}

        <div
          className="
            relative
            flex
            min-h-[420px]
            flex-col
            justify-between
            overflow-hidden
            p-6
            sm:p-8
            lg:min-h-[500px]
            lg:p-9
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
              className="flex h-full flex-col justify-between"
            >
              <div>
                {/* Top Meta */}

                <div className="flex items-center justify-between gap-4">
                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-accent
                    "
                  >
                    {String(project.id).padStart(2, "0")} / Featured
                  </span>

                  {/* Status */}

                  <div className="flex items-center gap-2">
                    {isInProgress && (
                      <motion.span
                        animate={{
                          opacity: [0.35, 1, 0.35],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-accent
                        "
                      />
                    )}

                    <span
                      className={[
                        "font-mono text-[9px] uppercase tracking-[0.12em]",
                        isInProgress ? "text-accent" : "text-muted",
                      ].join(" ")}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-foreground
                    sm:text-4xl
                  "
                >
                  {project.title}
                </h3>

                {/* Category */}

                <p className="mt-1 text-sm text-accent">{project.category}</p>

                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-6
                    text-muted
                  "
                >
                  {project.description}
                </p>

                {/* =================================================
                    HIGHLIGHTS
                ================================================= */}

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3">
                      <span
                        className="
                          mt-2
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-accent
                        "
                      />

                      <span className="text-xs leading-5 text-muted">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  BOTTOM
              ================================================= */}

              <div className="mt-8 border-t border-border pt-5">
                {/* Tech Stack */}

                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        border
                        border-border
                        px-2.5
                        py-1.5
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.08em]
                        text-muted
                        transition-colors
                        duration-300
                        hover:border-accent/30
                        hover:text-accent
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-muted
                    "
                  >
                    {isPaused
                      ? "Preview paused"
                      : `Auto preview · ${totalProjects} projects`}
                  </span>

                  <button
                    type="button"
                    onClick={() => onProjectSelect(project)}
                    className="
                      group
                      inline-flex
                      shrink-0
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-foreground
                      transition-colors
                      duration-300
                      hover:text-accent
                    "
                  >
                    Explore
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =================================================
            PROJECT PREVIEW
        ================================================= */}

        <ProjectPreview project={project} />
      </div>
    </article>
  );
}
