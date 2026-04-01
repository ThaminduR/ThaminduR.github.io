import { useParams, Link } from 'react-router-dom';
import { apps } from '../data/apps';

export default function AppDetail() {
  const { appId } = useParams<{ appId: string }>();
  const app = apps.find((a) => a.id === appId);

  if (!app) {
    return (
      <div className="app-detail">
        <p>App not found.</p>
        <Link to="/">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="app-detail">
      <Link to="/" className="back-link">Back to projects</Link>
      <h1>{app.name}</h1>
      <p className="app-description">{app.description}</p>
      <div className="app-tags">
        {app.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="app-actions">
        <a href={app.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Open App
        </a>
        <a href={app.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          View Source
        </a>
      </div>
    </div>
  );
}
