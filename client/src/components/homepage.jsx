import React, { Component } from 'react';
import styled from 'styled-components';


const headingStyles = styled.div`
background-color: red;
text-align:center;
}`



  
const homepage = (props) => {
    return (
        <headingStyles>
      <div class='container'>
        <h1>Welcome To Second Chef</h1>
        <h2>Your netflix's of personal Chefs</h2>
   </div>
   </headingStyles>
       
    )}

export default homepage;

//Create component for homepage
//have page render some html
// add buttons for sign in and up. create another 