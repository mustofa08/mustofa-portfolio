"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectSelectorProps = {
  projects: Project[];
  activeProjectId: number;
  onSelect: (project: Project) => void;
};

export function ProjectSelector({
  projects,
  activeProjectId,
  onSelect,
}: ProjectSelectorProps) {
  const columnCount = Math.min(Math.max(projects.length, 1), 4);

  return (
    <div className="border-t border-border">
      <div
        className="grid grid-cols-1"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        }}
      >
        {projects.map((project, index) => {
          const isActive = project.id === activeProjectId;
          const isLast = index === projects.length - 1;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelect(project)}
              className={[
                "group relative min-w-0 border-border px-5 py-4 text-left transition-all duration-300",
                !isLast ? "border-r" : "",
                isActive ? "bg-accent/[0.05]" : "hover:bg-surface/40",
              ].join(" ")}
            >
              {/* Active line */}

              <span
                className={[
                  "absolute bottom-0 left-0 right-0 h-px origin-left bg-accent transition-transform duration-300",
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100",
                ].join(" ")}
              />

              {/* Number + Arrow */}

              <div className="flex items-center justify-between gap-3">
                <span
                  className={[
                    "font-mono text-[10px]",
                    isActive ? "text-accent" : "text-muted",
                  ].join(" ")}
                >
                  {String(project.id).padStart(2, "0")}
                </span>

                <ArrowUpRight
                  size={13}
                  className={[
                    "shrink-0 transition-all duration-300",
                    isActive
                      ? "text-accent"
                      : "text-muted group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent",
                  ].join(" ")}
                />
              </div>

              {/* Project title */}

              <p
                className={[
                  "mt-3 truncate text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-foreground"
                    : "text-muted group-hover:text-foreground",
                ].join(" ")}
              >
                {project.title}
              </p>

              {/* Category */}

              <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-[0.1em] text-muted/60">
                {project.category}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
