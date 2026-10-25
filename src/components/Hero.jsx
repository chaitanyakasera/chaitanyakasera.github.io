import { useState } from 'react'
import { profile, stats } from '../data.js'

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true)
  const initials = profile.name.split(' ').map((w) => w[0]).join('')

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-loc">📍 {profile.location}</p>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
          </div>
        </div>
        <div className="avatar">
          {photoOk ? (
            <img src={profile.photo} alt={profile.name} onError={() => setPhotoOk(false)} />
          ) : (
            <span>{initials}</span>
          )}
        </div>
      </div>
      <div className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
