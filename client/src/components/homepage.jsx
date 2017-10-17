import React, { Component } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';


const Homestyle = styled.div`
text-align: center;
background-color: black;
color: red;
`




const homepage = (props) => {
    
    return (
      <div>
        <div>
        <Navbar/>
      </div>
        <Homestyle>  
      <div className='container'>
        <h1>Welcome To Second Chef</h1>
        <h2>Your netflix's of personal Chefs</h2>
   </div>
    </Homestyle>
   </div>
   
  
     
    )}

export default homepage;

//Create component for homepage
//have page render some html
// add buttons for sign in and up. create another 