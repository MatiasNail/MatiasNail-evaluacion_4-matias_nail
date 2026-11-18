const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Diseño responsive',
]

function Skills() {
  return (
    <section className="section" id="habilidades">
      <p className="section-label">Habilidades</p>
      <h2>Tecnologías y herramientas</h2>
      <ul className="skills-list">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}

export default Skills
