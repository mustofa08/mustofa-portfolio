"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, Monitor, X } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type Theme = "light" | "dark" | "system";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * =========================================================
   * THEME
   * =========================================================
   *
   * Light → Dark → System → Light
   */

  const cycleTheme = () => {
    const nextTheme: Record<Theme, Theme> = {
      light: "dark",
      dark: "system",
      system: "light",
    };

    setTheme(nextTheme[theme]);
  };

  /*
   * Icon berdasarkan theme aktif.
   */

  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  /*
   * Label untuk accessibility.
   */

  const themeLabel =
    theme === "light"
      ? "Light theme"
      : theme === "dark"
        ? "Dark theme"
        : "System theme";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-4 pt-4" : "px-6 pt-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled
            ? "rounded-full border border-border bg-background/80 px-5 py-3 backdrop-blur-xl"
            : "px-0 py-2"
        }`}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="#home"
          className="
            font-mono
            text-sm
            font-medium
            tracking-tight
            transition-colors
            hover:text-accent
          "
        >
          MUSTOFA
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                text-sm
                text-muted
                transition-colors
                hover:text-foreground
              "
            >
              {item.label}
            </a>
          ))}

          {/* =================================================
              THEME TOGGLE
          ================================================= */}

          <button
            type="button"
            onClick={cycleTheme}
            aria-label={`Change theme. Current: ${themeLabel}`}
            title={`Theme: ${themeLabel}`}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              text-muted
              transition-all
              duration-300
              hover:bg-surface
              hover:text-accent
            "
          >
            <ThemeIcon size={15} strokeWidth={1.8} />
          </button>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="
            text-muted
            transition-colors
            hover:text-foreground
            md:hidden
          "
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {mobileOpen && (
        <div
          className="
            mx-4
            mt-3
            rounded-2xl
            border
            border-border
            bg-background/95
            p-5
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-foreground
                "
              >
                {item.label}
              </a>
            ))}

            {/* =================================================
                MOBILE THEME
            ================================================= */}

            <div className="mt-1 border-t border-border pt-4">
              <button
                type="button"
                onClick={cycleTheme}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-foreground
                "
              >
                <span className="flex items-center gap-3">
                  <ThemeIcon size={15} strokeWidth={1.8} />

                  <span>
                    {theme === "light"
                      ? "Light"
                      : theme === "dark"
                        ? "Dark"
                        : "System"}
                  </span>
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted/60">
                  Change
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
