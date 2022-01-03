import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md">
      <div className="layout flex flex-col items-center py-6 font-readex font-semibold text-sm mx-auto max-w-5xl ">
        <div className="flex justify-between space-x-12">
          <Link href="/">
            <a className={router.pathname == "/" ? "navbar-active" : ""}>
              Home
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={router.pathname == "/portfolio" ? "navbar-active" : ""}
            >
              Portfolio
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "navbar-active" : ""}>
              About
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
