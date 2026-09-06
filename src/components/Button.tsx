import { ReactNode } from "react";


type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
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
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
