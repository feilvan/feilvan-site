import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <div className=" flex py-2 border-b border-neutral-400">
        <Link href="/" className=" mx-auto italic tracking-wider">
          FEILVAN
        </Link>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className=" flex py-2 border-t border-neutral-400 text-sm">
        © {new Date().getFullYear()}{" "}
      </div>
    </>
  );
}
