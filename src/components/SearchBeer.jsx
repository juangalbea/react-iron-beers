import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header';

export class SearchBeer extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Beer</h1>
        <input type="text" onChange={this.handleChange} />
        {
          this.state.beers.map(beer => {
            return (
              <p key={beer._id}>{beer.name}</p>
            )
          })
        }
      </div>
    )
  }
}

export default SearchBeer
