import React, { Component } from 'react';
import Navbar from '../Navbar';
class chefinfo extends Component {
    render() {
        return (
          <div>
            <Navbar/>
        <div>
      <div class="row">
        <div class="col s4 m6">
          <div class="card black darken-1">
            <div class="card-content white-text">
              <span class="card-title">Chef:</span>
              <h4>name:</h4>
              <h4>Bio:</h4>
              <h4>Price:</h4>
              <h4>Specialty:</h4>
              </div>
            <div class="card-action">
              <a href="/chefs">Back </a>
              <a href="#">Book Now!!</a>
            </div>
          </div>
        </div>
      </div>
        </div>  
        </div>  
        )
    }
}

export default chefinfo;