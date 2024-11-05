"use client";

import { WiDaySunny, WiMoonAltFirstQuarter, WiMoonFull } from "react-icons/wi";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else if (theme === "dark") {
          setTheme("system");
        } else {
          setTheme("light");
        }
      }}
      className="mx-1 p-1 text-xl transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
    >
      {theme === "light" ? (
        <WiDaySunny />
      ) : theme === "dark" ? (
        <WiMoonFull />
      ) : (
        <WiMoonAltFirstQuarter />
      )}
    </button>
  );
}
