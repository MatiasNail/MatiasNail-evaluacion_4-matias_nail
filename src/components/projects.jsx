const projects = [
  {
    title: 'Proyecto uno',
    description: 'Describe aquí el problema que resolviste y el resultado obtenido.',
    tags: ['React', 'CSS'],
  },
  {
    title: 'Proyecto dos',
    description: 'Añade el propósito del proyecto y las tecnologías principales.',
    tags: ['JavaScript', 'API'],
  },
  {
    title: 'Proyecto tres',
    description: 'Presenta una breve descripción enfocada en el valor del producto.',
    tags: ['Diseño', 'Frontend'],
  },
]

function Projects() {
  return (
    <section className="section" id="proyectos">
      <p className="section-label">Proyectos</p>
      <h2>Trabajo seleccionado</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-placeholder" aria-hidden="true">
              <span>Vista previa</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label="Tecnologías">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
