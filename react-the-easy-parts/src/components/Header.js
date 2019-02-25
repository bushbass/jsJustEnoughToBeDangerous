import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <h1>
        <Link to="/">Creature Collector</Link>
      </h1>
      <div>
        <Link to="/add-creature">Add a new creature</Link>
        <Link to="/show-creature">Show Creatures</Link>
      </div>
    </nav>
  );
}
