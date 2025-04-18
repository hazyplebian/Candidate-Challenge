import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul style={{ display: 'flex', margin: 0, padding: 0 }}>
        <li className="nav-item">
          <Link className="nav-link" to="/">Candidate Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SavedCandidates">Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
