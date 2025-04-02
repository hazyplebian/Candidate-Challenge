import * as React from 'react';
import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState<'name' | 'location'>('name');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]') as Candidate[];
    setSavedCandidates(saved);
  }, []);

  const removeCandidate = (id: number) => {
    const updated = savedCandidates.filter(candidate => candidate.id !== id);
    setSavedCandidates(updated);
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
  };

  // Filter candidates based on name or username, safely handling undefined values
  const filteredCandidates = savedCandidates.filter(candidate =>
    (((candidate.name || candidate.login) || '').toLowerCase()).includes(filter.toLowerCase())
  );

  // Sort candidates by name or location
  const sortedCandidates = filteredCandidates.sort((a, b) => {
    if (sortOption === 'name') {
      const nameA = (a.name || a.login) || '';
      const nameB = (b.name || b.login) || '';
      return nameA.localeCompare(nameB);
    } else {
      const locA = a.location || '';
      const locB = b.location || '';
      return locA.localeCompare(locB);
    }
  });

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Filter candidates by name"
          value={filter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <select
          value={sortOption}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortOption(e.target.value as 'name' | 'location')}
        >
          <option value="name">Sort by Name</option>
          <option value="location">Sort by Location</option>
        </select>
      </div>
      {sortedCandidates.length > 0 ? (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {sortedCandidates.map(candidate => (
              <tr key={candidate.id}>
                <td>
                  <img
                    className="candidate-avatar-table"
                    src={candidate.avatar_url}
                    alt={candidate.login}
                  />
                </td>
                <td>
                  {candidate.name
                    ? `${candidate.name} (${candidate.login})`
                    : candidate.login}
                </td>
                <td>{candidate.location || 'N/A'}</td>
                <td>{candidate.email || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'N/A'}</td>
                <td>
                  <button
                    className="reject-button-table"
                    onClick={() => removeCandidate(candidate.id)}
                  >
                    <span>-</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates available</p>
      )}
    </div>
  );
};

export default SavedCandidates;