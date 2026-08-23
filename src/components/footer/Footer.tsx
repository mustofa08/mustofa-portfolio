"use client";

import { ArrowUp, Mail } from "lucide-react";
import { motion } from "motion/react";
import * as simpleIcons from "simple-icons";

type SimpleIconData = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

const iconMap: Record<string, string> = {
  github: "siGithub",
  linkedin: "siLinkedin",
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
  size = 14,
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

export function Footer() {
  const githubIcon = getSimpleIcon("github");
  const linkedinIcon = getSimpleIcon("linkedin");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            flex
            min-h-16
            flex-col
            gap-4
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* =========================================
              LEFT
          ========================================= */}

          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="
                text-xs
                font-semibold
                tracking-tight
                text-foreground
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              Mustofa
            </a>

            <span className="h-1 w-1 rounded-full bg-accent" />

            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
              Software Developer
            </span>
          </div>

          {/* =========================================
              CENTER / SOCIAL
          ========================================= */}

          <div className="flex items-center gap-4">
            {githubIcon && (
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  text-muted
                  transition-colors
                  duration-300
                  hover:text-accent
                "
              >
                <SimpleIcon icon={githubIcon} size={14} />
              </a>
            )}

            {linkedinIcon && (
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  text-muted
                  transition-colors
                  duration-300
                  hover:text-accent
                "
              >
                <SimpleIcon icon={linkedinIcon} size={14} />
              </a>
            )}

            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="
                text-muted
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              <Mail size={14} strokeWidth={1.5} />
            </a>
          </div>

          {/* =========================================
              RIGHT
          ========================================= */}

          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] text-muted/60">
              © {new Date().getFullYear()} Mustofa
            </span>

            <button
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="
                group
                flex
                items-center
                gap-1.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.12em]
                text-muted
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              Top
              <ArrowUp
                size={12}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
