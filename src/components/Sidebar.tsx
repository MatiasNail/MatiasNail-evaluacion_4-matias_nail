import { Link, NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/sobre-mi', label: 'SOBRE MÍ' },
  { path: '/habilidades', label: 'HABILIDADES' },
  { path: '/proyectos', label: 'PROYECTOS' },
  { path: '/contacto', label: 'CONTACTO' }
];

export function Sidebar() {
  return (
    <header className="sidebar">
      <div>
        <h1 className="sidebar__name name">
          <Link to="/">Matías Nail</Link>
        </h1>
        <h2 className="sidebar__role role">
          Estudiante de Bachiller en Ciencias y Humanidades - Ingeniería Civil Informática
        </h2>
        <p className="sidebar__tagline tagline">
          Construyo soluciones de software accesibles, eficientes y enfocadas en bases de datos.
        </p>

        <nav className="nav-menu" aria-label="Navegación principal">
          <ul className="nav-menu__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="nav-menu__item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'nav-menu__link nav-menu__link--active active' : 'nav-menu__link'
                  }
                >
                  <span className="nav-menu__line nav-line" aria-hidden="true"></span>
                  <span className="nav-menu__text nav-text">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}