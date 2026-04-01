import { Link } from 'react-router-dom';
import type { AppEntry } from '../types/app';

export default function AppCard({ app }: { app: AppEntry }) {
  return (
    <Link to={`/apps/${app.id}`} className="app-card">
      <h3>{app.name}</h3>
      <p>{app.description}</p>
      <div className="app-tags">
        {app.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </Link>
  );
}
