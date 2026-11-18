import { HABILIDADES } from '../data/portfolioData';
import { TagList } from '../components/TagList';

export function Habilidades() {
  return (
    <section id="habilidades" className="section" aria-labelledby="habilidades-heading">
      <h2 id="habilidades-heading" className="section-title-desktop">
        Habilidades
      </h2>
      <TagList tags={HABILIDADES} ariaLabel="Stack Técnico" />
    </section>
  );
}