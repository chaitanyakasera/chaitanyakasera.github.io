import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <h2 className="section-title"><span>03</span> Experience</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.company}>
              <span className="period">{e.period}</span>
              <h3>{e.role}</h3>
              <p>{e.company}</p>
              <p className="muted">{e.location}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
