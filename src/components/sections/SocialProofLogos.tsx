// src/components/sections/SocialProofLogos.tsx
"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function SocialProofLogos() {
  // CORRECCIÓN: Obtenemos los logos de la ruta correcta en la configuración.
  // Ya no intentamos acceder a un 'title' que no existe aquí.
  const { logos } = siteConfig.bridgePage.proofSection.socialProof;

  return (
    // Hemos quitado el fondo y el padding de aquí, ya que la página padre
    // (`page.tsx`) ahora controla el layout de la sección.
    <div className="py-8 overflow-hidden">
      <Marquee
        gradient={true}
        gradientColor="#F9FAFB"
        gradientWidth={100}
        speed={40}
      >
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="mx-12 flex items-center justify-center"
          >
            <Image
              className="h-10 object-contain"
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={40}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
