export function Contacto() {
  return (
    <section id="contacto" className="section" aria-labelledby="contacto-heading">
      <h2 id="contacto-heading" className="section-title-desktop">
        Contacto
      </h2>
      <p className="contact-text">
        ¿Tienes alguna consulta o propuesta de proyecto académico? Puedes escribirme directamente a mi
        correo institucional o revisar mis repositorios en GitHub.
      </p>
      <div className="contact-actions">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mnail2026@alu.uct.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
          aria-label="Enviar correo a mnail2026@alu.uct.cl"
        >
          Enviar correo
        </a>
      </div>
    </section>
  );
}