// src/components/layout/Header.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-bg-light/90 backdrop-blur-lg border-b border-gray-200/80">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="Homepage">
            <span className="text-3xl font-bold text-brand-text-dark tracking-tighter">
              MITOLYN
            </span>
          </Link>
          <div className="hidden md:block">
            <Button href={siteConfig.affiliateLink} variant="primary">
              {siteConfig.layout.headerButtonText}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
