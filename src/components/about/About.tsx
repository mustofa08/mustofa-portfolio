"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { SkillCard } from "./SkillCard";

export function About() {
  return (
    <section
      id="about"
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
            SECTION HEADER
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
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              01 / About
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
              A little about me.
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-muted
              sm:text-right
            "
          >
            A developer focused on building practical digital products while
            exploring 3D modeling and interactive technologies.
          </p>
        </motion.div>

        {/* =================================================
            ABOUT CONTENT
        ================================================= */}

        <div
          className="
            mt-16
            grid
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          {/* =================================================
              PHOTO
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
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm lg:mx-0">
              {/* Decorative corner */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-3
                  -top-3
                  h-20
                  w-20
                  rounded-tr-2xl
                  border-r
                  border-t
                  border-accent/40
                "
              />

              {/* Photo */}

              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                "
              >
                <Image
                  src="/projects/profile.jpg"
                  alt="Portrait of Akhmad Mustofa Solikin"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="
                    object-cover
                    object-center
                    grayscale-[15%]
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-background/30
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* Photo Meta */}

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-accent" />

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-muted
                    "
                  >
                    Surabaya, Indonesia
                  </span>
                </div>

                <span className="font-mono text-[9px] text-muted">01 / 01</span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              ABOUT TEXT
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
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              flex
              flex-col
              justify-center
            "
          >
            {/* Label */}

            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-accent
              "
            >
              The person behind the code
            </p>

            {/* =================================================
                NAME
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
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
                delay: 0.12,
                ease: "easeOut",
              }}
              className="mt-5"
            >
              <h3
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Akhmad Mustofa Solikin
              </h3>

              <p
                className="
                  mt-2
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-accent
                "
              >
                Software Developer · Informatics Engineering Student
              </p>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div className="mt-7 space-y-6">
              <p
                className="
                  max-w-2xl
                  text-xl
                  leading-9
                  tracking-[-0.02em]
                  text-foreground
                  sm:text-2xl
                  sm:leading-10
                "
              >
                I build practical digital products and enjoy exploring new
                technologies that turn ideas into useful experiences.
              </p>

              <p
                className="
                  max-w-2xl
                  text-sm
                  leading-7
                  text-muted
                  sm:text-base
                "
              >
                My experience spans responsive web applications, full-stack
                development, RESTful APIs, and database-driven systems. I enjoy
                working across different parts of a product, from building
                interfaces to developing the systems behind them.
              </p>

              <p
                className="
                  max-w-2xl
                  text-sm
                  leading-7
                  text-muted
                  sm:text-base
                "
              >
                I care about creating solutions that are maintainable,
                intuitive, and useful. Alongside web development, I am currently
                exploring 3D modeling with Blender and interactive application
                development with Unity.
              </p>
            </div>

            {/* =================================================
                EDUCATION / LOCATION
            ================================================= */}

            <div
              className="
                mt-9
                grid
                gap-5
                border-t
                border-border
                pt-6
                sm:grid-cols-2
              "
            >
              {/* Education */}

              <div>
                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-muted
                  "
                >
                  Currently
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-foreground
                  "
                >
                  Informatics Engineering
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-muted
                  "
                >
                  Institut Teknologi Sepuluh Nopember
                </p>
              </div>

              {/* Location */}

              <div>
                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-muted
                  "
                >
                  Based in
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-foreground
                  "
                >
                  Surabaya
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-muted
                  "
                >
                  East Java, Indonesia
                </p>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE LINK
            ================================================= */}

            <a
              href="#experience"
              className="
                group
                mt-8
                inline-flex
                w-fit
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
              Explore my experience
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </motion.div>
        </div>

        {/* =================================================
            SKILLS
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mt-24
            border-t
            border-border
            pt-10
            sm:mt-28
          "
        >
          {/* Skills Header */}

          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-accent
                "
              >
                Skills
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-foreground
                  sm:text-3xl
                "
              >
                Tools I use to build.
              </h3>
            </div>

            <p
              className="
                max-w-md
                text-sm
                leading-6
                text-muted
                sm:text-right
              "
            >
              A growing toolkit across languages, frontend, backend, databases,
              development tools, and emerging interests in 3D and interactive
              application development.
            </p>
          </div>

          {/* =================================================
              SKILL CARDS
          ================================================= */}

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Languages */}

            <SkillCard
              title="Languages"
              description="Languages I work with across different projects."
              skills={[
                {
                  name: "JavaScript",
                  icon: "javascript",
                },
                {
                  name: "TypeScript",
                  icon: "typescript",
                },
                {
                  name: "PHP",
                  icon: "php",
                },
              ]}
            />

            {/* Frontend */}

            <SkillCard
              title="Frontend"
              description="Building responsive and user-focused interfaces."
              skills={[
                {
                  name: "React",
                  icon: "react",
                },
                {
                  name: "Next.js",
                  icon: "nextjs",
                },
                {
                  name: "Tailwind CSS",
                  icon: "tailwind",
                },
              ]}
            />

            {/* Backend */}

            <SkillCard
              title="Backend"
              description="Building APIs and application logic."
              skills={[
                {
                  name: "NestJS",
                  icon: "nestjs",
                },
                {
                  name: "Laravel",
                  icon: "laravel",
                },
                {
                  name: "Supabase",
                  icon: "supabase",
                },
              ]}
            />

            {/* Database */}

            <SkillCard
              title="Database"
              description="Working with relational and application data."
              skills={[
                {
                  name: "PostgreSQL",
                  icon: "postgresql",
                },
                {
                  name: "MySQL",
                  icon: "mysql",
                },
              ]}
            />

            {/* Tools */}

            <SkillCard
              title="Tools"
              description="Tools that support my development workflow."
              skills={[
                {
                  name: "Git",
                  icon: "git",
                },
                {
                  name: "GitHub",
                  icon: "github",
                },
                {
                  name: "Postman",
                  icon: "postman",
                },
              ]}
            />

            {/* 3D & Interactive */}

            <SkillCard
              title="3D & Interactive"
              description="Technologies currently being explored for 3D modeling and interactive application development."
              skills={[
                {
                  name: "Blender",
                  icon: "blender",
                },
                {
                  name: "Unity",
                  icon: "unity",
                },
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
