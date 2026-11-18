import { ProjectItem } from '../types';
import { TagList } from './TagList';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="project-card__year project-year">{project.year}</div>
      <div className="project-card__info project-info">
        <h3 className="project-card__title project-title">{project.title}</h3>
        <p className="project-card__desc project-desc">{project.description}</p>
        <TagList tags={project.tags} ariaLabel="Tecnologías utilizadas" />
      </div>
    </>
  );

  return (
    <article className="project-card">
      {project.url ? (
        <a
          href={project.url}
          className="project-card__link project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      ) : (
        <div className="project-card__link project-card__link--static project-link project-link--static">
          {cardContent}
        </div>
      )}
    </article>
  );
}