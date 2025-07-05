// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/go", // ¡MUY IMPORTANTE! Ocultamos nuestra ruta de cloaking.
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
