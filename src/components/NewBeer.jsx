import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';

export class NewBeer extends Component {
  constructor() {
    super()
    this.state = {
      image_url: "",
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tip: "",
      attenuation_level: 0,
      contributed_by: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  // handleSubmit = e => {
  //   e.preventDefalut();
  //   this.props.addTheFood(this.state);
  //   // this.setState({
  //   //   image_url: "",
  //   //   name: "",
  //   //   tagline: "",
  //   //   description: "",
  //   //   first_brewed: "",
  //   //   brewers_tip: "",
  //   //   attenuation_level: 0,
  //   //   contributed_by: ""
  //   // })
  // }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label>Image url</label>
          <input type="text" value={this.state.image_url} name="image_url" onChange={this.handleChange} />
          <label>Name</label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          <label>Tag line</label>
          <input type="text" value={this.state.tagline} name="tagline" onChange={this.handleChange} />
          <label>First Brewed</label>
          <input type="text" value={this.state.first_brewed} name="first_brewed" onChange={this.handleChange} />
          <label>Brewers Tip</label>
          <input type="text" value={this.state.brewers_tip} name="brewers_tip" onChange={this.handleChange} />
          <label>Attenuation level</label>
          <input type="text" value={this.state.attenuation_level} name="attenuation_level" onChange={this.handleChange} />
          <label>Description</label>
          <input type="text" value={this.state.description} name="description" onChange={this.handleChange} />
          <label>Contributed by</label>
          <input type="text" value={this.state.contributed_by} name="contributed_by" onChange={this.handleChange} />
          <input type="submit" value="Submit"  />
        </form>
      </div>
    )
  }
}

export default NewBeer
