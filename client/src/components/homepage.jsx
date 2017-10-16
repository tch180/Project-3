import React, { Component } from 'react';
import styled from 'styled-components';



const homeStyles = styled.div`
height: 300px;
width: 300px;
margin: 20px;
background-color: rgba(223, 255, 0, 0.79);


} h1 {
    text-align:center;
}
`;
const headingStyles = styled.h1` 
  background-color: green;
  font-size: 45px;
`;



  
const homepage = (props) => {
    return (
        
        <homeStyles>
            <headingStyles>
        <h1>Welcome To Second Chef</h1>
        <h2>Your netflix's of personal Chefs</h2>
    </headingStyles>


        
      </homeStyles>
       
    )}

export default homepage;

//Create component for homepage
//have page render some html
// add buttons for sign in and up. create another 