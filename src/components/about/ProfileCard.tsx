"use client";

import { Code2, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const profileItems = [
  {
    icon: MapPin,
    label: "Based in",
    value: "Indonesia",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Web Development",
  },
  {
    icon: Sparkles,
    label: "Currently",
    value: "Learning & Building",
  },
];

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-surface/30 sm:grid-cols-3"
    >
      {profileItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className={[
              "group flex items-center gap-3 p-4 sm:p-5",
              index !== 0
                ? "border-t border-border sm:border-l sm:border-t-0"
                : "",
            ].join(" ")}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/15">
              <Icon size={15} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                {item.label}
              </p>

              <p className="mt-0.5 truncate text-xs font-medium text-foreground sm:text-sm">
                {item.value}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
