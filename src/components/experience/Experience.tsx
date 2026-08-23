"use client";

import { motion } from "motion/react";

import {
  experiences,
  type Experience as ExperienceType,
} from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================================
            HEADER
        ========================================= */}

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
          }}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              04 / Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              Experience.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted lg:text-right">
            A look at the experiences that shaped how I work and solve problems.
          </p>
        </motion.div>

        {/* =========================================
            EXPERIENCE LIST
        ========================================= */}

        <div className="mt-14">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   EXPERIENCE ITEM
========================================= */

type ExperienceItemProps = {
  experience: ExperienceType;
  index: number;
};

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="relative py-8 sm:py-10"
    >
      {/* =========================================
          SEPARATOR
          Hanya muncul di antara experience
      ========================================= */}

      {index > 0 && (
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-px bg-border"
        />
      )}

      <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-12">
        {/* =========================================
            DATE
        ========================================= */}

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {experience.startDate}
          </p>

          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">
            — {experience.endDate}
          </p>
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}

        <div>
          {/* Role + Company + Location */}

          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {experience.role}
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
                {experience.company}
              </h3>
            </div>

            <p className="text-xs text-muted">{experience.location}</p>
          </div>

          {/* Description */}

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
            {experience.description}
          </p>

          {/* =========================================
              HIGHLIGHTS
          ========================================= */}

          <div className="mt-6 max-w-3xl">
            <ul className="space-y-2.5">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-xs leading-6 text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
