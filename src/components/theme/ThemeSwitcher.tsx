"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const themes = [
  {
    value: "light" as const,
    label: "Light",
    icon: Sun,
  },
  {
    value: "system" as const,
    label: "System",
    icon: Monitor,
  },
  {
    value: "dark" as const,
    label: "Dark",
    icon: Moon,
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const currentTheme = themes.find((item) => item.value === theme) ?? themes[1];

  const Icon = currentTheme.icon;

  return (
    <div className="relative">
      <select
        value={theme}
        onChange={(event) =>
          setTheme(event.target.value as "light" | "dark" | "system")
        }
        aria-label="Select theme"
        className="cursor-pointer appearance-none rounded-full border border-border bg-background/70 py-2 pl-3 pr-8 text-xs font-medium text-muted outline-none backdrop-blur-xl transition-all duration-300 hover:border-accent hover:text-foreground focus:border-accent"
      >
        {themes.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <Icon
        size={13}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
      />
    </div>
  );
}
