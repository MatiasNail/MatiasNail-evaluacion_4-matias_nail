import { SOBRE_MI_PARRAFOS } from '../data/portfolioData';

export function SobreMi() {
  return (
    <section id="sobre-mi" className="section" aria-labelledby="sobre-mi-heading">
      <h2 id="sobre-mi-heading" className="section-title-desktop">
        Sobre mí
      </h2>
      {SOBRE_MI_PARRAFOS.map((parrafo, index) => (
        <p key={index} style={{ marginBottom: index === 0 ? '1rem' : 0 }}>
          {parrafo}
        </p>
      ))}
    </section>
  );
}