import React, { Component } from 'react';
import './styles/app.css';
import { Parallax } from 'react-materialize';

//Image assets
import HoldHandsPic from './Assets/holdhandsbeach.jpg';
import WeddingRingsPic from './Assets/weddingrings.jpg';
import BrentwoodHillsPic from './Assets/brentwood.jpg';
import HeelsPic from './Assets/weddingheels.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div id="main">
          <img className="main-image" src={WeddingRingsPic}/>
          <p className="main-image-words">You are invited...</p>
        </div>
        <div>
          <div className="section white">
            <div className="row container">
              <h1 className="header">Angelica & Jerry</h1>
              <p className="grey-text text-darken-3 lighten-3">06.22.19</p>
            </div>
          </div>
        </div>

        <div>
          <Parallax imageSrc={HoldHandsPic}/>
          <div className="section white">
            <div className="row container">
              <h1 className="header">Brentwood, CA</h1>
              <p className="grey-text text-darken-3 lighten-3">Ceremony @ Immaculate Heart of Mary</p>
              <p className="grey-text text-darken-3 lighten-3">Reception @ Club Los Meganos</p>
            </div>
          </div>
          <Parallax imageSrc={HeelsPic}/>
          <div className="section white">
            <div className="row container">
              <h1 className="header">RSVP</h1>
              <p className="grey-text text-darken-3 lighten-3">Select your meal below...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;