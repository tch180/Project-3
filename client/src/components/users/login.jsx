import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
        
            <form action="INFO" method="post">
              <div>
                <label>Name:</label>
                <input type="name" name="name" id="name" />
              </div><br/>
              <div>
                <label>Phone Number:</label>
                <input type="name" name="PhoneNumber" id="phoneNumber" placeholder='Enter Phone Number' />
              </div><br/>
              <div>
                <label>Email:</label>
                <input type='name' placeholder="Enter Email Address"/>
            </div>
            <div>
                <label>Address:</label>
                <input type='string' placeholder="Enter Address"/>
            </div>
             
            </form>
          );
    }
}

export default login;