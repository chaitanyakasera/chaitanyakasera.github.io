import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <h2 className="section-title"><span>02</span> Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="card">
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
