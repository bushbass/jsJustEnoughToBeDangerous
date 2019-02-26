import React, { Component } from 'react';
import './App.css';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import About from './components/About';
import Contact from './components/Contact';
import AddCreature from './components/AddCreature';
import ShowCreature from './components/ShowCreature';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.updateCardData = this.updateCardData.bind(this);
    this.deleteCardData = this.deleteCardData.bind(this);
  }

  state = {
    cardData: [
      { name: 'Darla', breed: 'dragon', description: 'pink dragon' },
      { name: 'Quintato', breed: 'iguana', description: 'green iguana' },
      { name: 'Penko', breed: 'Penguin', description: 'classic penguin' }
    ]
  };

  updateCardData(cardState) {
    this.setState({ cardData: [...this.state.cardData, cardState] });
  }

  deleteCardData() {
    this.setState({ cardData: [] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={Main} />
          <Route
            path="/add-creature"
            render={props => (
              <AddCreature
                {...props}
                updateCardData={this.updateCardData}
                testFunc={this.testFunc}
              />
            )}
          />

          <Route
            path="/show-creature"
            render={props => (
              <ShowCreature
                {...props}
                cardArray={this.state.cardData}
                deleteCardData={this.deleteCardData}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
