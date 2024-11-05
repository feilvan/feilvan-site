import { default as NextLink } from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

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
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <RiArrowRightUpLine className="ml-1 inline-block" />
    </a>
  ) : (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
