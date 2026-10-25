import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section reveal">
      <div className="container">
        <h2 className="section-title"><span>05</span> Education</h2>
        <ol className="timeline">
          {education.map((e) => (
            <li key={e.degree}>
              <span className="period">{e.period}</span>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <p className="muted">{e.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
