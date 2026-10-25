import { projects, otherProjects, profile } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <h2 className="section-title"><span>04</span> Projects</h2>
        <div className="projects-grid three">
          {projects.map((p) => (
            <article key={p.title} className="card project">
              <div className="project-head">
                <h3>{p.title}</h3>
                <p className="muted">{p.role}</p>
              </div>
              <p className="desc">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  Google Play ↗
                </a>
              )}
              {p.status && <span className="badge">{p.status}</span>}
            </article>
          ))}
        </div>

        <h3 className="sub-title">Earlier projects</h3>
        <ul className="other-list">
          {otherProjects.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong>
              <span className="muted">{p.note}</span>
              <span className="tag">{p.role}</span>
            </li>
          ))}
        </ul>

        <p className="more">
          More on <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </p>
      </div>
    </section>
  )
}
