import React, { Component } from 'react';


class chefs extends Component {
    render() {
     return (
            
            <div class="row">
        <div class="col s12 m6">
          <div class="card black darken-1">
            <div class="card-content white-text">
              <span class="card-title">Chef Bob</span>
              <h2>name:</h2>
              <h2>speciality:</h2>
              </div>
            <div class="card-action">
              <a href="chefinfo">Information</a>
              <a href="#">Book Now!!</a>
            </div>
          </div>
        </div>
      </div>
            
     );
    }
}



export default chefs;