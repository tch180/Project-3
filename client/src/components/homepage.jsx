import React, { Component } from 'react';
import styled from 'styled-components';



const homeStyles = styled.div`
height: 300px;
width: 300px;
margin: 20px;
background-color: rgba(253, 255, 0, 0.79);
}
`;
const headingStyles = styled.h1` 
  background-color: green;
  font-size: 45px;
`;



  
const homepage = (props) => {
    return (
        <headingStyles>
        <h1>Welcome To Second Chef</h1>
        <h2>Your netflix's of personal Chefs</h2>
        </headingStyles> 

        
        <homeStyles>
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Chef Bob</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">Information</a>
              <a href="#">Book Now!!</a>
            </div>
          </div>
        </div>
      </div>
      </homeStyles>
       
    )}

export default homepage;

//Create component for homepage
//have page render some html
// add buttons for sign in and up. create another 