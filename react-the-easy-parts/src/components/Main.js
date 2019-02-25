import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <main className="main-add">
        <h3>Catalog your stuffed animals and other friends</h3>
        <div id="main-questions">
          <p>How many stuffed animals do you have?</p>
          <p>What are their names?</p>
          <p>How many of them are dragons?</p>
          <p>Or penguins?</p>
          <p>Start cataloging your creatures and you'll know for sure!</p>
        </div>
      </main>
    );
  }
}
