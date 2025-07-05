// next.config.ts

import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  // Para Vercel, este objeto debe estar vacío o contener configuraciones
  // que NO sean `output: 'export'`.
  // Vercel detecta automáticamente que es un proyecto Next.js y aplica
  // las mejores optimizaciones de build y despliegue (SSR, ISR, Server Components).
  // Por ejemplo, aquí podrías añadir configuración de imágenes, si fuera necesario:
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'example.com',
  //     },
  //   ],
  // },
};

export default nextConfig;
