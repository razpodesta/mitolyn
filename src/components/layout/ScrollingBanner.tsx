// src/components/layout/ScrollingBanner.tsx
"use client";

import Marquee from "react-fast-marquee";
import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ScrollingBanner() {
  const message = siteConfig.layout.scrollingBannerText;

  // Construimos las clases de forma limpia y sin comentarios internos.
  const bannerClasses = [
    "py-2",
    "text-sm",
    "font-bold",
    "text-white", // Contraste sobre el gradiente
    "bg-gradient-to-r",
    "from-orange-500",
    "via-red-500",
    "to-orange-500",
    "animate-gradient-x", // Aplicamos la animación
  ].join(" ");

  return (
    <div className={bannerClasses}>
      <Marquee speed={50} autoFill={true}>
        <div className="flex items-center mx-12">
          {/* El ícono también es blanco para mantener el contraste */}
          <AlertTriangle className="h-4 w-4 mr-3 flex-shrink-0" />
          <span className="uppercase tracking-wider">{message}</span>
        </div>
      </Marquee>
    </div>
  );
}
