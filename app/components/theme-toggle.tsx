"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun, LuSunMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else if (theme === "dark") {
          setTheme("system");
        } else {
          setTheme("light");
        }
      }}
      className="m-1 px-[5px] py-1 text-lg transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
    >
      {theme === "light" ? (
        <LuSun />
      ) : theme === "dark" ? (
        <LuMoon />
      ) : (
        <LuSunMoon />
      )}
    </button>
  );
}
