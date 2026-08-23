"use client";

import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import * as simpleIcons from "simple-icons";

type Skill = {
  name: string;
  icon: string;
};

type SkillCardProps = {
  title: string;
  description: string;
  skills: Skill[];
};

type SimpleIconData = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

const categoryIcons: Record<
  string,
  ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>
> = {
  Languages: Braces,
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

/*
 * Mapping skill kita ke nama export
 * dari package simple-icons.
 */

const iconMap: Record<string, string> = {
  // Languages
  javascript: "siJavascript",
  typescript: "siTypescript",
  php: "siPhp",

  // Frontend
  react: "siReact",
  nextjs: "siNextdotjs",
  tailwind: "siTailwindcss",

  // Backend
  nestjs: "siNestjs",
  laravel: "siLaravel",
  supabase: "siSupabase",

  // Database
  postgresql: "siPostgresql",
  mysql: "siMysql",

  // Tools
  git: "siGit",
  github: "siGithub",
  postman: "siPostman",
};

function getSimpleIcon(name: string): SimpleIconData | null {
  const exportName = iconMap[name];

  if (!exportName) {
    return null;
  }

  const icon = (simpleIcons as Record<string, SimpleIconData | undefined>)[
    exportName
  ];

  return icon ?? null;
}

function SimpleIcon({
  icon,
  size = 15,
}: {
  icon: SimpleIconData;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function SkillCard({ title, description, skills }: SkillCardProps) {
  const CategoryIcon = categoryIcons[title] ?? Code2;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface/30
        p-5
        transition-colors
        duration-300
        hover:border-accent/30
        hover:bg-surface/50
      "
    >
      {/* =========================================
          TOP ACCENT
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          h-px
          w-0
          bg-accent
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Category icon */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-background
              text-accent
              transition-colors
              duration-300
              group-hover:border-accent/30
            "
          >
            <CategoryIcon size={16} strokeWidth={1.6} />
          </div>

          {/* Category title */}

          <div>
            <h4 className="text-sm font-medium text-foreground">{title}</h4>

            <p
              className="
                mt-1
                font-mono
                text-[8px]
                uppercase
                tracking-[0.12em]
                text-muted
              "
            >
              {skills.length} {skills.length === 1 ? "skill" : "skills"}
            </p>
          </div>
        </div>

        {/* Arrow */}

        <ArrowUpRight
          size={14}
          className="
            text-muted
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-accent
          "
        />
      </div>

      {/* =========================================
          DESCRIPTION
      ========================================= */}

      <p className="mt-5 text-xs leading-5 text-muted">{description}</p>

      {/* =========================================
          SKILLS
      ========================================= */}

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => {
          const icon = getSimpleIcon(skill.icon);

          return (
            <div
              key={skill.name}
              className="
                group/skill
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-border
                bg-background/50
                px-2.5
                py-2
                transition-all
                duration-300
                hover:border-accent/30
                hover:bg-accent/[0.04]
              "
            >
              {/* Technology logo */}

              {icon && (
                <span
                  className="
                    text-muted
                    transition-colors
                    duration-300
                    group-hover/skill:text-accent
                  "
                  title={skill.name}
                >
                  <SimpleIcon icon={icon} size={15} />
                </span>
              )}

              {/* Technology name */}

              <span
                className="
                  text-[10px]
                  font-medium
                  text-foreground
                "
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
