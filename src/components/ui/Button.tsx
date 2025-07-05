// src/components/ui/Button.tsx
import React from "react";
import Link from "next/link";

// CORRECCIÓN: Definimos correctamente la interfaz con todas las props necesarias.
export interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-3 text-lg text-center font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-brand-green text-white hover:bg-brand-green-dark focus-visible:ring-brand-green",
    secondary:
      "bg-brand-blue text-white hover:bg-blue-700 focus-visible:ring-brand-blue",
    outline:
      "border-2 border-gray-300 text-brand-text-light bg-transparent hover:bg-gray-100 hover:text-brand-text-dark focus-visible:ring-gray-400",
  };

  // Esta línea ahora es completamente segura para TypeScript.
  const classes = [baseStyles, variantStyles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
