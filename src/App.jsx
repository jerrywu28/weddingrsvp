import React, { Component } from 'react';
import './styles/app.css';
import { Parallax, Row, Input, Button } from 'react-materialize';

//Image assets
import HoldHandsPic from './Assets/holdhandsbeach.jpg';
import WeddingRingsPic from './Assets/weddingrings.jpg';
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
          <div className="section lightgrey">
            <div className="row container">
              <h1 className="header">Angelica & Jerry</h1>
              <p className="grey-text text-darken-3 lighten-3">06.22.19</p>
            </div>
          </div>
        </div>

        <div>
          <Parallax imageSrc={HoldHandsPic}/>
          <div className="section lightgrey">
            <div className="row container">
              <h1 className="header">Brentwood, CA</h1>
              <p className="grey-text text-darken-3 lighten-3">Ceremony @ Immaculate Heart of Mary</p>
              <p className="grey-text text-darken-3 lighten-3">Reception @ Club Los Meganos</p>
            </div>
          </div>
          <Parallax imageSrc={HeelsPic}/>
          <div className="section lightgrey form">
            <div className="row container">
              <h1 className="header">RSVP</h1>
              <Row>
                <Input placeholder="Placeholder" s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input placeholder="Phone #" label="phone" s={6} />
                <Input placeholder="Email" type="email" label="Email" s={6} />
                <Input s={12} type='select' label="Number of Guests" defaultValue='0'>
                  <option value='0'>None</option>
                  <option value='1'>+1</option>
                  <option value='2'>+2</option>
                  <option value='3'>+3</option>
                </Input>
                <Row>
                  <h5>Entrees:</h5>
                  <Input name='primary-entree' type='radio' value='filet' label='Grilled Filet Mignon' />
                  <Input name='primary-entree' type='radio' value='bass' label='Pan-Seared Sea Bass' />
                  <Input name='primary-entree' type='radio' value='ravioli' label='Porcini Mushroom and Truffle Ravioli' />
                </Row>
                <Button>RSVP</Button>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//Additional form fields should be created as +1, +2, +3 are added.
//Asking for name of guest and what they want to eat.

export default App;