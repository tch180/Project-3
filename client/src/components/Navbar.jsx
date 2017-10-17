import React, { Component } from 'react';
import styled from 'styled-components';

const Navbarhead = styled.div`
background-image: url(https://i.imgur.com/8l0eRk3.jpg?1)
`


class Navbar extends Component {
    render() {
        return (
            <Navbarhead>
                <div>
        <nav>
        <div class="nav-wrapper">
          <a href="#" background-color='black'  class="brand-logo right">2nd Chef</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="./signup">Sign-Up</a></li>
            <li><a href="/chefs">Chefs</a></li>
            
          </ul>
        </div>
      </nav>
            </div>
            </Navbarhead>
        );
    }
}

export default Navbar;