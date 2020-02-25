import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import ListBeer from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import SearchBeer from './components/SearchBeer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newBeer" component={NewBeer} />
          <Route path="/allBeers" component={ListBeer} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route path="/RandomBeer" component={RandomBeer} />
          <Route path="/searchBeer" component={SearchBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
