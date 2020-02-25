import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';

export class SingleBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    // console.log(this.props.match.params.id)
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ beer: response.data })
      })
      .catch(err => console.log(err))
  }



  render() {
    // console.log(this.state.beer)
    // console.log(this.props.match.params.beerId);
    return (
      <div>
        <Header />
        <img src={this.state.beer.image_url} alt="" />
        <p>{this.state.beer.name}</p>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    )
  }
}

export default SingleBeer
