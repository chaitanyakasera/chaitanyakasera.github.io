import { profile, highlights } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <h2 className="section-title"><span>01</span> About me</h2>
        <div className="about-grid">
          <p className="lead">{profile.summary}</p>
          <div className="card">
            <h3>Highlights</h3>
            <ul className="ticks">
              {highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
