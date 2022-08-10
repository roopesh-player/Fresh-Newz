import React, { Component } from 'react'

export class About extends Component {
  constructor(){
    super();
    document.title="Fresh Newz - About Us"
  }
  render() {
    return (
      <div className='container my-5' style={{color: 'black'}}>
      <h1>About Us</h1>
      <dl className='row my-4 mx-1'>This app delivers top-headlines</dl>
      <dl className="row">
    <dt class="col-sm-3">Owner</dt>
    <dd class="col-sm-9">Roopesh kumar</dd>
  
    <dt class="col-sm-3">Purporse</dt>
    <dd class="col-sm-9">Practice</dd>
      </dl>
  </div>
    )
  }
}

export default About
