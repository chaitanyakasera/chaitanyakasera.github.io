import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="container contact">
        <h2 className="section-title"><span>06</span> Get in touch</h2>
        <p className="lead">
          I'm open to Android and mobile development roles. If you're building something
          interesting, I'd love to hear about it.
        </p>
        <div className="hero-cta center">
          <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
