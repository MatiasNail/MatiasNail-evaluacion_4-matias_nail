function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          Tu Nombre
        </a>
        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
