import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {

  const base =
    "inline-block rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 shadow-lg",

    secondary:
      "border border-violet-500 text-violet-300 hover:bg-violet-500/10",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}