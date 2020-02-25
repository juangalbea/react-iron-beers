import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to='/allBeers' >All Beers</Link>
        <Link to='/randomBeer' >Random Beer</Link>
        <Link to='/newBeer' >New Beer</Link>
        <Link to='/searchBeer' >Search Beer</Link>
      </div>
    )
  }
}

export default Home
