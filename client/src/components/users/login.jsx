import React, { Component } from 'react';
import Navbar from '../Navbar';
class login extends Component {
    render() {
        return (
          <div>
          <Navbar/>
        <div>
            <form action="GET" method="post">
              <div>
                <label>Name:</label>
                <input id="name" placeholder='Enter Full Name' />
              </div><br/>
              <div>
                <label>Phone Number:</label>
                <input type="Number" name="PhoneNumber" id="phoneNumber" placeholder='Enter Phone Number' />
              </div><br/>
              <div>
                <label>Email:</label>
                <input type='Email' placeholder="Enter Email Address"/>
            </div>
            <div>
                <label>Address:</label>
                <input  placeholder="Enter Address"/>
                <a class="waves-effect waves-light btn"><i class="material-icons right">Submit</i></a>
                <a class="waves-effect waves-light btn"><i class="material-icons right">login</i></a>
            </div>
             
            </form>
            </div>
            </div>
          );
    }
}

export default login;