import { AccordionItem } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
export function FaqAccordion() {
  return (
    <section className="py-16">
      <Container>
        <h2>FAQ Accordion</h2>
        <AccordionItem title="Pergunta 1?">Resposta 1.</AccordionItem>
      </Container>
    </section>
  );
}
