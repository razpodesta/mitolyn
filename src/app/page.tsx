// src/app/page.tsx

"use client"; // Esta página ahora usa hooks (para la animación), por lo que debe ser un Client Component.

import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { SocialProofLogos } from "@/components/sections/SocialProofLogos";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn"; // Importamos el componente de animación
import { siteConfig } from "@/config/site";

/**
 * ============================================================================
 * Componente Principal de la Página: BridgePage
 * ============================================================================
 *
 * Esta es la página de aterrizaje principal, diseñada con una estrategia de
 * "gancho emocional" para maximizar la conexión con el usuario y la tasa de
 * clics hacia la VSL del productor.
 *
 */
export default function BridgePage() {
  // Desestructuramos el contenido desde la configuración para un código limpio y mantenible.
  const { hero, thumbSection, proofSection } = siteConfig.bridgePage;

  // Clases para el thumbnail definidas de forma segura para evitar errores de hidratación.
  const thumbnailClasses = [
    "relative",
    "aspect-video",
    "max-w-2xl",
    "mx-auto",
    "group",
    "rounded-lg",
    "overflow-hidden",
    "border-4",
    "border-brand-bg-white",
    "shadow-lg",
    "hover:shadow-2xl",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "hover:-translate-y-2",
  ].join(" ");

  return (
    <>
      {/* SECCIÓN 1: El Gancho Emocional */}
      {/* Envuelto en FadeIn para una aparición suave al cargar la página. */}
      <FadeIn>
        <Hero title={hero.title} subtitle={hero.subtitle} />
      </FadeIn>

      {/* SECCIÓN 2: Thumbnail y CTA Principal */}
      {/* Esta sección también aparece con una animación sutil. */}
      <FadeIn>
        <section className="pb-16 bg-brand-bg-white">
          <Container className="text-center">
            <Link
              href={siteConfig.affiliateLink}
              aria-label={thumbSection.ctaButtonText}
            >
              <div className={thumbnailClasses}>
                <Image
                  src={thumbSection.imageUrl}
                  alt={thumbSection.altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority // Carga esta imagen con alta prioridad.
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/10">
                  <div className="bg-black/50 rounded-full p-4 md:p-6 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="w-12 h-12 md:w-16 md:h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-10">
              <Button
                href={siteConfig.affiliateLink}
                variant="primary"
                className="text-xl px-12 py-4 animate-pulse"
              >
                {thumbSection.ctaButtonText}
              </Button>
            </div>
          </Container>
        </section>
      </FadeIn>

      {/* SECCIÓN 3: Copy Breve, Prueba Social y Carrusel de Logos */}
      {/* La sección de logos ahora es un carrusel dinámico para mayor profesionalismo. */}
      <FadeIn>
        <section className="py-16 bg-brand-bg-light">
          <Container className="text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-text-dark">
              {proofSection.title}
            </h2>
            <p className="mt-4 text-lg text-brand-text-light">
              {proofSection.body}
            </p>
          </Container>
          {/* El componente SocialProofLogos ahora contiene su propio padding y fondo. */}
          <div className="mt-8">
            <SocialProofLogos />
          </div>
        </section>
      </FadeIn>
    </>
  );
}
