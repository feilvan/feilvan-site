import { useEffect, useState } from "react";
import { WiDaySunny, WiMoonAltFirstQuarter, WiMoonFull } from "react-icons/wi";

const ColorSchemeToggle = () => {
  // Initialize state with null to prevent hydration mismatch
  const [theme, setTheme] = useState<string | null>(null);
  const [systemTheme, setSystemTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Effect to handle initial setup after mount
  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "auto");

    // Check system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    setMounted(true);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Effect to update document class and localStorage when theme changes
  useEffect(() => {
    if (!mounted || theme === null) return;

    const root = document.documentElement;
    const effectiveTheme = theme === "auto" ? systemTheme : theme;

    root.classList.remove("light", "dark");
    if (effectiveTheme) {
      root.classList.add(effectiveTheme);
    }
    localStorage.setItem("theme", theme);
  }, [theme, systemTheme, mounted]);

  const cycleTheme = () => {
    const themes = ["auto", "light", "dark"];
    const currentIndex = themes.indexOf(theme ?? "auto");
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

  // Determine which icon to show based on effective theme
  const getIcon = () => {
    switch (theme) {
      case "auto":
        return <WiMoonAltFirstQuarter />;
      case "light":
        return <WiDaySunny />;
      case "dark":
        return <WiMoonFull />;
    }
  };

  return (
    <button
      aria-label="Toggle color scheme"
      onClick={cycleTheme}
      className="mx-1 flex items-center rounded-lg px-1 py-1 text-xl transition-colors"
    >
      {getIcon()}
    </button>
  );
};

export default ColorSchemeToggle;
