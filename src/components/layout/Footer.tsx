// src/components/layout/Footer.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site"; // Importamos la configuración

export function Footer() {
  const { copyright, links, disclaimer } = siteConfig.layout.footer;

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm">{copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500 border-t border-gray-700 pt-6">
          <p>{disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
