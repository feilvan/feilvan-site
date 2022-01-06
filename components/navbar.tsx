import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky mx-auto w-full top-0 z-20 py-2 backdrop-blur-lg bg-gray-100/70 dark:bg-gray-900/70">
      <div className="layout flex flex-col items-center font-semibold text-sm mx-auto max-w-5xl ">
        <div className="flex justify-between space-x-1">
          <Link href="/">
            <a className={router.pathname == "/" ? "navbar-active" : ""}>
              <div className="px-3 py-2 rounded-md hover:bg-brand hover:text-white transition">
                Home
              </div>
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={router.pathname == "/portfolio" ? "navbar-active" : ""}
            >
              <div className="px-3 py-2 rounded-md hover:bg-brand hover:text-white transition">
                Portfolio
              </div>
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "navbar-active" : ""}>
              <div className="px-3 py-2 rounded-md hover:bg-brand hover:text-white transition">
                About
              </div>
            </a>
          </Link>
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-2 rounded-md hover:bg-brand hover:text-white transition"
          >
            {theme === "light" ? <FaMoon size={15} /> : <FaSun size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}
