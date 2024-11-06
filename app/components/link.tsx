import { default as NextLink } from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

export default function Link({
  href,
  children,
  external,
  ...props
}: LinkProps) {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
      {...props}
    >
      {children}
      <LuArrowUpRight className="ml-1 inline-block" />
    </a>
  ) : (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
