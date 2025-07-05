// src/components/sections/TextSection.tsx

import { Container } from "@/components/ui/Container";
import React from "react";

interface TextSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function TextSection({ children, className = "" }: TextSectionProps) {
  // La misma solución aquí para la etiqueta <section>
  const sectionClasses = ["py-16", className].filter(Boolean).join(" ");

  return (
    <section className={sectionClasses}>
      <Container>{children}</Container>
    </section>
  );
}
