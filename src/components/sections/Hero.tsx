// src/components/sections/Hero.tsx
import { Container } from "@/components/ui/Container";

interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    // We use tight tracking for a more impactful headline
    <section className="bg-brand-bg-white pt-12 pb-16 text-center">
      <Container className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text-dark leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-brand-text-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
