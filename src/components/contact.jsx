function Contact() {
  return (
    <section className="section contact-section" id="contacto">
      <p className="section-label">Contacto</p>
      <h2>¿Tienes una idea en mente?</h2>
      <p>
        Estoy abierto/a a nuevas oportunidades y colaboraciones. Escríbeme y
        pongamos tu proyecto en marcha.
      </p>
      <a className="button button-primary" href="mailto:tu@email.com">
        Enviar un mensaje
      </a>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Tu Nombre</p>
      </footer>
    </section>
  )
}

export default Contact
