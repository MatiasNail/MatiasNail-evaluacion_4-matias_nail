Modelo de IA: Gemini

prompt necesito te pongas en el papel de un desarollador frontend semántico y aplicando buenas prácticas, te pongo más en contexto, necesito recrear un portafolio mío hecho con html y css con tecnología React ahora, siguiendo lo requerido en los pdf's cargados, tengo el proyecto creado y actualmente refleja una página en blanco. Necesito me ayudes a gestionar como seria el desglose de mi web html en componentes y páginas para refactorizarla a react usando typescript (subidos el html y css de la web nota n°2)

evaluacion_4-matias_nail/
├── docs/
│   └── captura-e2.png                # Captura en alta resolución de tu portafolio HTML/CSS original[cite: 18, 19]
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.tsx            # Envoltorio: SkipLink + Sidebar + <main><Outlet/></main> + Footer
│   │   │   └── Layout.css            # Grid/Flex de dos columnas (.layout, .layout__content)
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx           # Tu <header class="sidebar"> con <NavLink> y enlace a "/"
│   │   │   └── Sidebar.css           # Estilos BEM (.sidebar, .sidebar__name, .nav-menu__link--active)
│   │   ├── Footer/
│   │   │   ├── Footer.tsx            # Tu <footer class="site-footer"> con SVG de GitHub e Instagram
│   │   │   └── Footer.css            # Estilos BEM (.site-footer, .site-footer__link)
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.tsx       # Tu <article class="project-card"> (soporta link y variante --static)
│   │   │   └── ProjectCard.css       # Estilos BEM (.project-card, .project-card__title, .project-card--static)
│   │   ├── TagList/
│   │   │   ├── TagList.tsx           # Lista reutilizable <ul class="tags"> para Habilidades y Proyectos
│   │   │   └── TagList.css           # Estilos BEM (.tags, .tags__item)
│   │   └── StatusMessage/
│   │       ├── StatusMessage.tsx     # Componente accesible (role="status" / role="alert") para API[cite: 20, 22]
│   │       └── StatusMessage.css     # Estilos BEM (.status-message, .status-message--error)
│   ├── data/
│   │   └── portfolioData.ts          # Textos de Sobre mí, Habilidades y tus 3 Proyectos tipados
│   ├── hooks/
│   │   └── useFetchApi.ts            # Custom Hook con fetch, estados (loading, data, error) y AbortController[cite: 19, 21]
│   ├── pages/
│   │   ├── SobreMiPage.tsx           # Ruta "/" y "/sobre-mi"
│   │   ├── HabilidadesPage.tsx       # Ruta "/habilidades"
│   │   ├── ProyectosPage.tsx         # Ruta "/proyectos" (tus 3 proyectos + GitHub REST API)
│   │   ├── ContactoPage.tsx          # Ruta "/contacto"
│   │   └── NotFoundPage.tsx          # Ruta "*" (404 Not Found con botón de retorno a "/")[cite: 18, 20]
│   ├── types/
│   │   └── index.ts                  # Interfaces ProjectItem y GitHubRepo (cero "any")[cite: 18, 20, 21]
│   ├── App.tsx                       # Configuración de <Routes> y <Route>
│   ├── main.tsx                      # <BrowserRouter> + <App />
│   └── index.css                     # Variables CSS (:root), tipografía, reset y :focus-visible[cite: 19, 20]
├── .gitignore
├── index.html                        # Metadatos + <script type="module" src="/src/main.tsx">
├── INVENTARIO.md                     # Trazabilidad de migración E2 -> React/BEM[cite: 20, 23]
├── package.json
├── README.md                         # Guía ejecutable, contrato API y evidencia Lighthouse[cite: 20, 23]
├── tsconfig.json
├── uso_ia.md                         # Bitácora obligatoria de 6 secciones[cite: 20, 24]
└── vite.config.ts

4. Interfaces Base en TypeScript (src/types/portfolio.ts)Para cumplir con el criterio de tipado estricto (cero any), crea este archivo antes de programar los componentes:   TypeScriptexport interface Proyecto {
  id: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  url?: string; // Opcional: si no viene, se renderiza como tarjeta estática
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;

necesito me especifíques los componentes y páginas que debe tener mi proyecto react para que quede como el html

1. Páginas (src/pages/) — Conectadas a React RouterEn tu HTML tenías 4 secciones navegables por anclas (#sobre-mi, #habilidades, #proyectos, #contacto). En React, cada una se convierte en una página independiente:   Archivo de PáginaRuta URLQué parte de tu HTML renderizaSobreMiPage.tsx/ y /sobre-mi<section id="sobre-mi"> con tus dos párrafos de presentación. Es tu vista por defecto al entrar al sitio.   HabilidadesPage.tsx/habilidades<section id="habilidades"> con tu lista de tecnologías (MySQL / SQL, Modelado MER / MR, HTML5 / CSS3, Git & GitHub).ProyectosPage.tsx/proyectos<section id="proyectos"> con tus 3 tarjetas de proyectos + el bloque de la API pública de GitHub (exigido por rúbrica).   ContactoPage.tsx/contacto<section id="contacto"> con tu texto de invitación y el botón/enlace directo a Gmail (mnail2026@alu.uct.cl).NotFoundPage.tsx* (cualquier ruta inválida)Vista de respaldo si alguien escribe una URL que no existe, con un botón para volver a / (exigido para el nivel Excelente en Rutas).   2. Componentes (src/components/) — Piezas Estructurales y ReutilizablesSiguiendo la pauta de la Sesión 29 (se separan los elementos persistentes, los que se repiten con props y los que tienen estado propio):   A. Componentes de Estructura (Layout)Sidebar.tsx (src/components/layout/Sidebar.tsx)Qué reemplaza: <header class="sidebar">...</header>.Responsabilidad: Muestra tu nombre (<h1><Link to="/">Matías Nail</Link></h1>), tu subtítulo (role), tu tagline y el <nav className="nav-menu">.Cambio clave: Usa <NavLink> de react-router-dom en lugar de <a href="#...">. Esto marca automáticamente la sección activa para que tu CSS .nav-line y .nav-text sigan funcionando igual.   Footer.tsx (src/components/layout/Footer.tsx)Qué reemplaza: <footer class="site-footer">...</footer>.Responsabilidad: Renderiza los dos enlaces con iconos SVG (GitHub e Instagram) con sus atributos aria-label y rel="noopener noreferrer".B. Componentes Reutilizables y de Datos (UI)TagList.tsx (src/components/ui/TagList.tsx)Qué reemplaza: <ul class="tags">...</ul> (que en tu HTML aparece repetido en Habilidades y dentro de cada Proyecto).Props tipadas: Recibe tags: string[] y ariaLabel: string.ProjectCard.tsx (src/components/ui/ProjectCard.tsx)Qué reemplaza: Cada <article class="project-card">.Props tipadas: Recibe un objeto proyecto: Proyecto (year, title, description, tags y url?).Lógica interna: Si proyecto.url existe, envuelve el contenido en <a className="project-link" target="_blank" rel="noopener noreferrer">. Si no tiene url (como tu Sistema de Gestión de Base de Datos — UCT), lo envuelve en <div className="project-link project-link--static">.GitHubRepos.tsx (src/components/ui/GitHubRepos.tsx)Qué agrega: Cumple el requisito obligatorio de consumir una API pública ([https://api.github.com/users/MatiasNail/repos](https://api.github.com/users/MatiasNail/repos)).   Estado propio: Maneja useState y useEffect para mostrar los 4 estados obligatorios en pantalla: Cargando, Éxito (renderizando tus repositorios reales con el mismo estilo de tarjetas), Error (mensaje claro + botón reintentar) y Vacío.   3. Cómo se ensambla todo en App.tsxEn src/App.tsx mantienes el esqueleto exacto de tu <body> para que el CSS de dos columnas (sidebar + content) no se rompa:TypeScriptimport { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import SobreMiPage from './pages/SobreMiPage';
import HabilidadesPage from './pages/HabilidadesPage';
import ProyectosPage from './pages/ProyectosPage';
import ContactoPage from './pages/ContactoPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Sidebar />

      <main id="main-content" className="content">
        <Routes>
          <Route path="/" element={<SobreMiPage />} />
          <Route path="/sobre-mi" element={<SobreMiPage />} />
          <Route path="/habilidades" element={<HabilidadesPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

