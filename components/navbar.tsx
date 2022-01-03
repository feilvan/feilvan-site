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
              <a className="py-6">Home</a>
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={router.pathname == "/portfolio" ? "navbar-active" : ""}
            >
              <a className="py-6">Portfolio</a>
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "navbar-active" : ""}>
              <a className="py-6">About</a>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
