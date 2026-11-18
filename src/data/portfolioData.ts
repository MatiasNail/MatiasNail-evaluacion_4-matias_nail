import { ProjectItem } from '../types';

export const SOBRE_MI_PARRAFOS: string[] = [
  'Me llamo Matías Nail, tengo 19 años y me apasiona el mundo de la programación y el desarrollo de software. Me motiva mucho aprender acerca de nuevos temas en general.',
  'Actualmente me encuentro cursando el programa de Bachiller en Ciencias y Humanidades pronto a cursar la carrera de Ingeniería Civil Informática en la UCT. Me apasiona la arquitectura de software, el diseño de bases de datos relacionales y el aprendizaje continuo de nuevas herramientas.'
];

export const HABILIDADES: string[] = [
  'MySQL / SQL',
  'Modelado MER / MR',
  'HTML5 / CSS3',
  'Git & GitHub'
];

export const PROYECTOS_DESTACADOS: ProjectItem[] = [
  {
    id: 'bd-uct',
    year: '2026',
    title: 'Sistema de Gestión de Base de Datos — UCT',
    description:
      'Diseño integral desde el Modelado Entidad-Relación (MER) hasta la migración al Modelo Relacional y la ejecución de scripts con restricciones avanzadas y consultas SQL.',
    tags: ['MySQL', 'SQL']
  },
  {
    id: 'serie-favorita',
    year: '2026',
    title: 'Web Sobre de mi Serie Favorita — UCT',
    description:
      'Desarrollo de una página web informativa sobre mi serie favorita para practicar bases de frontend, implementando HTML y CSS.',
    tags: ['HTML5', 'CSS3'],
    url: 'https://serie-favorita-web.vercel.app/'
  },
  {
    id: 'plantilla-react',
    year: '2026',
    title: 'Plantilla React desplegada — UCT',
    description:
      'Despliegue de una plantilla React en un servidor web, con el objetivo de realizar un acercamiento a la tecnología de React y su ecosistema, incluyendo la gestión de dependencias y el uso de herramientas de construcción.',
    tags: ['React', 'Vite', 'Node.js'],
    url: 'https://matias-sesion-13-cxdltso0z-matiasnail.vercel.app/'
  }
];