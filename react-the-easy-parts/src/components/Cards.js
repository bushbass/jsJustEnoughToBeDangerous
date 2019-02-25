import React, { Component } from 'react';
import Card from './Card';

export default class Cards extends Component {
  render() {
    return (
      <div id="cards">
        {this.props.cardArray.map(card => (
          <Card
            key={card.name}
            name={card.name}
            breed={card.breed}
            description={card.description}
          />
        ))}
      </div>
    );
  }
}
