import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">ThaminduR</Link>
      <div className="nav-links">
        <Link to="/">Projects</Link>
        <a href="https://github.com/ThaminduR" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
}
