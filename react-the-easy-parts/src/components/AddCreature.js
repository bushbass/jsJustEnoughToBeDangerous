import React, { Component } from 'react';

export default class AddCreature extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = { name: '', breed: '', description: '' };

  handleInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <main className="main-add">
        <h3>Tell us about your special creature</h3>
        <p>
          Here is where you can tell us about your special friend. None of the
          fields are required but the more you fill out the better.
        </p>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            placeholder="breed"
            name="breed"
            id="breed"
            value={this.state.breed}
            onChange={this.handleInputChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="description"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <button
            id="add-button"
            onClick={event => {
              event.preventDefault();
              this.props.updateCardData(this.state);
              this.props.history.push('/show-creature');
            }}
          >
            Add A Creature!
          </button>
        </form>
      </main>
    );
  }
}
