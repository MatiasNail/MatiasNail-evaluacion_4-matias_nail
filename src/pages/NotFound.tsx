import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="section" aria-labelledby="not-found-heading">
      <h2 id="not-found-heading" className="section-title-desktop">
        404 — Página no encontrada
      </h2>
      <p style={{ marginBottom: '1.5rem' }}>
        La ruta que intentas visitar no existe dentro de este portafolio.
      </p>
      <Link to="/" className="contact-btn">
        Volver al inicio
      </Link>
    </section>
  );
}