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

/* =========================================================
   LINKEDIN ICON
========================================================= */

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8.1 18.5H5.4V9.8h2.7v8.7ZM6.75 8.6a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.6 18.5h-2.7v-4.25c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.24v4.32h-2.7V9.8h2.59v1.19h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.24 1.8 3.24 4.15v4.76Z" />
    </svg>
  );
}

export function Footer() {
  const githubIcon = getSimpleIcon("github");

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
          {/* =================================================
              LEFT
          ================================================= */}

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

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.12em]
                text-muted
              "
            >
              Software Developer
            </span>
          </div>

          {/* =================================================
              CENTER / SOCIAL
          ================================================= */}

          <div className="flex items-center gap-4">
            {/* GitHub */}

            {githubIcon && (
              <a
                href="https://github.com/mustofa08"
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

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/akhmad-mustofa-solikin-595952342/"
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
              <LinkedInIcon size={14} />
            </a>

            {/* Email */}

            <a
              href="mailto:a.mustofasolikin@gmail.com"
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

          {/* =================================================
              RIGHT
          ================================================= */}

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
