import { PROYECTOS_DESTACADOS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ReposGitHub } from '../components/ReposGithub';

export function Proyectos() {
  return (
    <section id="proyectos" className="section" aria-labelledby="proyectos-heading">
      <h2 id="proyectos-heading" className="section-title-desktop">
        Proyectos
      </h2>

      {PROYECTOS_DESTACADOS.map((proyecto) => (
        <ProjectCard key={proyecto.id} project={proyecto} />
      ))}

      <ReposGitHub />
    </section>
  );
}