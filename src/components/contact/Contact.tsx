"use client";

import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import * as simpleIcons from "simple-icons";

/* =========================================================
   SIMPLE ICON TYPE
========================================================= */

type SimpleIconData = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

/* =========================================================
   SIMPLE ICON MAP
========================================================= */

/*
 * simple-icons@16.28.0 tidak menyediakan siLinkedin.
 *
 * Karena itu:
 * - GitHub → simple-icons
 * - LinkedIn → SVG manual di bawah
 */

const iconMap: Record<string, string> = {
  github: "siGithub",
};

/* =========================================================
   GET SIMPLE ICON
========================================================= */

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

/* =========================================================
   SIMPLE ICON
========================================================= */

function SimpleIcon({
  icon,
  size = 16,
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

/*
 * Menggunakan SVG manual yang sama dengan Footer.
 *
 * Jangan diganti menjadi siLinkedin karena export tersebut
 * memang tidak tersedia pada simple-icons versi yang digunakan.
 */

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

/* =========================================================
   CONTACT
========================================================= */

export function Contact() {
  const githubIcon = getSimpleIcon("github");

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        py-24
        sm:py-32
      "
    >
      {/* =================================================
          ACCENT GLOW
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -z-10
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-accent/[0.045]
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
        >
          <div className="flex items-center gap-2">
            <Sparkles size={13} strokeWidth={1.6} className="text-accent" />

            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              05 / Contact
            </p>
          </div>

          <h2
            className="
              mt-5
              max-w-5xl
              text-5xl
              font-semibold
              leading-[0.94]
              tracking-[-0.045em]
              text-foreground
              sm:text-6xl
              lg:text-[5.5rem]
            "
          >
            LET&apos;S BUILD
            <br />
            SOMETHING <span className="text-accent">TOGETHER.</span>
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-base
              leading-7
              text-muted
              sm:text-lg
            "
          >
            Have a project, idea, or opportunity in mind? I&apos;d be happy to
            hear about it.
          </p>
        </motion.div>

        {/* =================================================
            CONTACT GRID
        ================================================= */}

        <div
          className="
            mt-14
            grid
            gap-5
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT — EMAIL CTA
          ================================================= */}

          <motion.a
            href="mailto:a.mustofasolikin@gmail.com"
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.08,
            }}
            className="
              group
              relative
              flex
              min-h-[250px]
              flex-col
              justify-between
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-surface/20
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent/30
              hover:bg-surface/40
              sm:p-8
            "
          >
            {/* Hover glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-accent/[0.07]
                opacity-0
                blur-3xl
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* =================================================
                MAIL ICON
            ================================================= */}

            <div
              className="
                relative
                flex
                h-11
                w-11
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
              <Mail size={18} strokeWidth={1.5} />
            </div>

            {/* =================================================
                EMAIL CONTENT
            ================================================= */}

            <div className="relative">
              <p
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-muted
                "
              >
                Start a conversation
              </p>

              <div className="mt-2 flex items-center justify-between gap-4">
                <p
                  className="
                    text-lg
                    font-medium
                    text-foreground
                    sm:text-xl
                  "
                >
                  a.mustofasolikin@gmail.com
                </p>

                <ArrowUpRight
                  size={18}
                  className="
                    shrink-0
                    text-muted
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-accent
                  "
                />
              </div>
            </div>
          </motion.a>

          {/* =================================================
              RIGHT — CONTACT LINKS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.16,
            }}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-surface/20
            "
          >
            {/* =================================================
                GITHUB
            ================================================= */}

            <ContactLink
              label="GitHub"
              value="github.com/mustofa08"
              href="https://github.com/mustofa08"
              icon={githubIcon}
            />

            {/* =================================================
                LINKEDIN
            ================================================= */}

            <ContactLink
              label="LinkedIn"
              value="www.linkedin.com/in/akhmad-mustofa-solikin-595952342/"
              href="https://www.linkedin.com/in/akhmad-mustofa-solikin-595952342/"
              iconType="linkedin"
            />

            {/* =================================================
                LOCATION
            ================================================= */}

            <ContactLink
              label="Location"
              value="Indonesia"
              iconType="location"
            />
          </motion.div>
        </div>

        {/* =================================================
            AVAILABILITY
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
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
            delay: 0.24,
          }}
          className="
            mt-5
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-border
            bg-surface/10
            px-5
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-accent
                  opacity-40
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-accent
                "
              />
            </span>

            <p
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-muted
              "
            >
              Open to opportunities &amp; interesting projects
            </p>
          </div>

          <p className="font-mono text-[9px] text-muted/60">
            Let&apos;s make something useful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT LINK
========================================================= */

type ContactLinkProps = {
  label: string;
  value: string;
  href?: string;
  icon?: SimpleIconData | null;
  iconType?: "location" | "linkedin";
};

/* =========================================================
   CONTACT LINK COMPONENT
========================================================= */

function ContactLink({ label, value, href, icon, iconType }: ContactLinkProps) {
  const content = (
    <>
      {/* =================================================
          LEFT — ICON + TEXT
      ================================================= */}

      <div className="flex items-center gap-4">
        {/* =================================================
            ICON
        ================================================= */}

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-border
            bg-background
            text-muted
            transition-all
            duration-300
            group-hover:border-accent/30
            group-hover:text-accent
          "
        >
          {icon ? (
            <SimpleIcon icon={icon} size={16} />
          ) : iconType === "linkedin" ? (
            <LinkedInIcon size={16} />
          ) : iconType === "location" ? (
            <MapPin size={16} strokeWidth={1.5} />
          ) : (
            <Mail size={16} strokeWidth={1.5} />
          )}
        </div>

        {/* =================================================
            TEXT
        ================================================= */}

        <div>
          <p
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.14em]
              text-muted
            "
          >
            {label}
          </p>

          <p
            className="
              mt-1
              text-xs
              font-medium
              text-foreground
              transition-colors
              duration-300
              group-hover:text-accent
              sm:text-sm
            "
          >
            {value}
          </p>
        </div>
      </div>

      {/* =================================================
          ARROW
      ================================================= */}

      {href && (
        <ArrowUpRight
          size={15}
          className="
            shrink-0
            text-muted
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-accent
          "
        />
      )}
    </>
  );

  /* =======================================================
     NON-LINK ITEM
  ======================================================= */

  if (!href) {
    return (
      <div
        className="
          flex
          items-center
          justify-between
          gap-5
          border-b
          border-border
          px-5
          py-5
          last:border-b-0
          sm:px-6
        "
      >
        {content}
      </div>
    );
  }

  /* =======================================================
     LINK ITEM
  ======================================================= */

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group
        flex
        items-center
        justify-between
        gap-5
        border-b
        border-border
        px-5
        py-5
        transition-colors
        duration-300
        last:border-b-0
        hover:bg-accent/[0.025]
        sm:px-6
      "
    >
      {content}
    </a>
  );
}
