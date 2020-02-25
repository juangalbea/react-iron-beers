import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class ListBeers extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.beers)
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Header />
        {
          this.state.beers.map((beer, idx) => {
            return (
              <div key={idx} style={{ width: "100px", margin: "10px" }}>
                <img style={{ width: "100px" }} src={beer.image_url} alt="" />
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>beer</Link>
              </div>
            )
          })
        }

        <h1>List of beers</h1>
      </div>
    )
  }
}

export default ListBeers
