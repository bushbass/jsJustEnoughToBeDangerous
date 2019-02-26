import React, { Component } from 'react';
import Cards from './Cards';
import MainHeader from './MainHeader';
import DeleteButton from './DeleteButton';

export default class Main extends Component {
  render() {
    return (
      <main className="main-cards">
        <MainHeader />
        <Cards cardArray={this.props.cardArray} />
        <DeleteButton deleteCardData={this.props.deleteCardData} />
      </main>
    );
  }
}
