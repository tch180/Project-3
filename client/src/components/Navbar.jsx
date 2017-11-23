import React, { Component } from 'react';
import styled from 'styled-components';

const Navbarhead = styled.div`
background-image: url('https://i.imgur.com/NCTOjV4.jpg');
background-color:black;
`


class Navbar extends Component {
    render() {
        return (
            <Navbarhead>
                <div>
        <nav>
        <div className="nav-wrapper">
          <a href="/Home"  className="brand-logo right">2nd Chef</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign-Up</a></li>
            <li><a href="/chefs">Chefs</a></li>
            <li><a href='/allUsers'>Users</a></li>
            <li><a href='/menu'>Menu</a></li>
            
          </ul>
        </div>
      </nav>
            </div>
            </Navbarhead>
        );
    }
}

export default Navbar;