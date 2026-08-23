"use client";

import { useEffect, useState } from "react";
import { Layers3 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { projects, type Project } from "@/data/projects";

import { FeaturedProject } from "./FeaturedProject";
import { ProjectSelector } from "./ProjectSelector";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationKey, setRotationKey] = useState(0);

  /*
   * =========================================================
   * AUTO ROTATION
   * =========================================================
   */

  useEffect(() => {
    if (isPaused || projects.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveProject((currentProject) => {
        const currentIndex = projects.findIndex(
          (project) => project.id === currentProject.id,
        );

        const nextIndex = (currentIndex + 1) % projects.length;

        return projects[nextIndex];
      });
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, rotationKey]);

  /*
   * =========================================================
   * PROJECT SELECT
   * =========================================================
   */

  const handleProjectSelect = (project: Project) => {
    if (project.id === activeProject.id) {
      return;
    }

    setActiveProject(project);

    // Reset auto rotation timer.
    setRotationKey((current) => current + 1);
  };

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        py-24
        sm:py-32
      "
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            grid
            gap-6
            lg:grid-cols-[1fr_0.45fr]
            lg:items-end
          "
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              03 / Projects
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                tracking-[-0.04em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              Things I&apos;ve built.
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-muted
              lg:justify-self-end
            "
          >
            Selected work, experiments, and projects that represent how I learn,
            build, and solve problems.
          </p>
        </motion.div>

        {/* =================================================
            FEATURED PROJECT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.05,
            ease: "easeOut",
          }}
          className="mt-16"
        >
          {/* =================================================
              SELECTED WORK LABEL
          ================================================= */}

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers3 size={14} strokeWidth={1.7} className="text-accent" />

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                Selected Work
              </span>
            </div>

            <div className="flex items-center gap-3">
              <AnimatePresence initial={false}>
                {isPaused && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: 4,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      hidden
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-accent
                      sm:block
                    "
                  >
                    Paused
                  </motion.span>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeProject.id}
                  initial={{
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="font-mono text-[10px] text-muted"
                >
                  {String(activeProject.id).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              FEATURED PROJECT
          ================================================= */}

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/*
             * IMPORTANT:
             *
             * FeaturedProject sekarang TIDAK di-wrap
             * AnimatePresence.
             *
             * Frame tetap stabil.
             *
             * Animasi hanya terjadi pada isi project.
             */}

            <FeaturedProject
              project={activeProject}
              totalProjects={projects.length}
              isPaused={isPaused}
              onProjectSelect={handleProjectSelect}
            />

            {/* =================================================
                PROJECT SELECTOR
            ================================================= */}

            <ProjectSelector
              projects={projects}
              activeProjectId={activeProject.id}
              onSelect={handleProjectSelect}
            />
          </div>

          {/* =================================================
              ROTATION INDICATOR
          ================================================= */}

          <div className="mt-4 flex items-center justify-between">
            <p
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.12em]
                text-muted
              "
            >
              {isPaused ? "Hover paused" : "Auto preview"}
            </p>

            <div className="flex items-center gap-1.5">
              {projects.map((project) => {
                const isActive = project.id === activeProject.id;

                return (
                  <motion.span
                    key={project.id}
                    animate={{
                      width: isActive ? 20 : 6,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-1 rounded-full"
                    style={{
                      backgroundColor: isActive
                        ? "var(--accent)"
                        : "var(--border)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
