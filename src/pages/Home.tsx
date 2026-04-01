import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Projects</h1>
        <p className="hero-subtitle">Apps and tools by ThaminduR</p>
      </section>
      <section className="app-grid">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>
    </div>
  );
}
