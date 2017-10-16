import React, { Component } from 'react';
import styled from 'styled-components';


const homestyle = styled.div`
text-align:center;
background-color: green;
`


class homepage extends Component {
    render() {
        return (
            <homestyle>
      <div class='container'>
        <h1>Welcome To Second Chef</h1>
        <h2>Your netflix's of personal Chefs</h2>
   </div>
  </homestyle>
        );
    }
}
  



       
    

export default homepage;

//Create component for homepage
//have page render some html
// add buttons for sign in and up. create another 