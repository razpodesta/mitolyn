// src/components/ui/TestimonialCard.tsx

import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  imageSrc: string; // Ex: "/images/testimonials/peggy.jpg"
}

export function TestimonialCard({
  quote,
  author,
  location,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-start">
        <Image
          src={imageSrc}
          alt={`Foto de ${author}`}
          width={60}
          height={60}
          className="rounded-full mr-4 border-2 border-brand-cyan"
        />
        <div>
          {/* Corrigido: Usamos crases para permitir aspas dentro da string */}
          <p className="text-gray-800 italic">{`"${quote}"`}</p>
          <p className="mt-4 font-bold text-brand-blue">{author}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
