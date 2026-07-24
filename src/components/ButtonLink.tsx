import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
};

export default function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
  target,
  rel,
}: ButtonLinkProps) {
  const base =
    "inline-block rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 shadow-lg",

    secondary:
      "border border-violet-500 text-violet-300 hover:bg-violet-500/10",
  };

  if (external) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}