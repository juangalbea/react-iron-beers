import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';

export class RandomBeer extends Component {
  constructor() {
    super()
    this.state = {
      randomBeer: {}
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        this.setState({ randomBeer: response.data })
      })
      .catch(err => console.log(err))
  }
  render() {
    console.log(this.state.randomBeer)
    return (
      <div>
        <Header />
        <img src={this.state.randomBeer.image_url} alt="" />
        <p>{this.state.randomBeer.name}</p>
        <p>{this.state.randomBeer.tagline}</p>
        <p>{this.state.randomBeer.first_brewed}</p>
        <p>{this.state.randomBeer.attenuation_level}</p>
        <p>{this.state.randomBeer.description}</p>
        <p>{this.state.randomBeer.contributed_by}</p>
      </div>
    )
  }
}

export default RandomBeer
