// src/app/review/page.tsx

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

// Un pequeño componente para el ícono de la lista de beneficios
const BenefitIcon = () => (
  <svg
    className="h-6 w-6 flex-shrink-0 text-brand-cyan"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function ReviewPage() {
  // Ahora TypeScript sabe que `siteConfig.reviewPage` tiene una propiedad `intro`
  const { intro } = siteConfig.reviewPage;

  return (
    <div className="bg-brand-bg-light">
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text-dark leading-tight">
            {intro.openingQuestion}
          </h1>

          <div className="mt-6 space-y-4 text-lg text-brand-text-light">
            {/* TypeScript ahora sabe que `intro.paragraphs` es un array de strings */}
            {intro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 text-left">
            <ul className="space-y-4">
              {/* TypeScript ahora sabe que `intro.benefits` es un array de strings */}
              {intro.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <BenefitIcon />
                  <span className="ml-3 text-lg font-semibold text-brand-text-dark">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 text-lg italic text-brand-text-light">
            {intro.closingStatement}
          </p>

          <div className="mt-10 p-8 bg-white rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-text-dark">
              {intro.cta.question}
            </h2>
            <div className="mt-6">
              <Button
                href={siteConfig.affiliateLink}
                variant="primary"
                className="w-full md:w-auto text-xl animate-pulse"
              >
                {intro.cta.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* 
        AQUÍ COMENZARÍAN LAS OTRAS SECCIONES DE LA REVIEW PAGE
      */}
    </div>
  );
}
