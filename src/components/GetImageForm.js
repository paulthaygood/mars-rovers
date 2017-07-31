import React, {Component} from 'react';
import axios from 'axios';

import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = 'MtYaL08GZp1YLEeJYICpJwfAbf0moS2KI6aD69y1';

class GetImageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      sol: "",
      images: []
    }

    this.fetchRoverImage = this.fetchRoverImage.bind(this);
  }

  handleRover = (event) => {
    this.setState({rover: event.target.value});
  }

  handleCamera = (event) => {
    this.setState({camera: event.target.value});
  }

  handleSol = (event) => {
    this.setState({sol: event.target.value});
  }

  fetchRoverImage = (event) => {
    event.preventDefault();
    let rover = this.state.rover;
    let camera = this.state.camera;
    let sol = this.state.sol;
    console.log(this.state);
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`)
    .then(response => {
      this.setState({images: response.data.photos})
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="rover">Rover</label>
          <select id="rover" onChange={this.handleRover} value={this.state.rover}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select id="camera" onChange={this.handleCamera} value={this.state.camera}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol 1000-2000</label>
          <input id="sol" onChange={this.handleSol} value={this.state.sol} max="2000" min="1000" />
          <GetImageButton onClick={this.fetchRoverImage} />
        </form>
        <ImageDisplay images={this.state.images} />
      </div>
    );
  }
}

export default GetImageForm;
