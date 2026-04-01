import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Thamindu Aluthwala</h1>
        <p className="hero-role">Associate Technical Lead at WSO2</p>
        <p className="hero-bio">
          Focused on enterprise security and identity systems. Builds and directs
          the development of platform components that power authentication,
          authorization, and identity lifecycle management. Operating at the
          intersection of IAM, distributed systems, and AI-driven developer
          experiences.
        </p>
        <div className="hero-links">
          <a href="https://github.com/ThaminduR" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/thamindur/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="app-grid">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
}
