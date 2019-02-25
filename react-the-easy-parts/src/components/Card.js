import React from 'react';

export default function Card({ name, breed, description }) {
  console.log();
  return (
    <div className="card">
      <h4>Name: {name}</h4>
      <p>Breed: {breed}</p>
      <p>Description: {description}</p>
    </div>
  );
}
