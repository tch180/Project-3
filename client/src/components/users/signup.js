import React, { Component } from 'react';
import Navbar from '../Navbar'
class Signup extends Component {
    render() {
        return (
        <div>
        <Navbar/> 
            <div>
                <form action="">
                    <div>
                            <label>Name:</label>
                            <input type="text" placeholder="Enter Name"/>
                    </div>
                    <div>
                            <label>Phone Number:</label>
                            <input type="tel" placeholder="Enter Phone Number"/>
                    </div>
                    <div>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter Email Address"/>
                    </div>
                    <div>
                            <label>Address:</label>
                            <input type="text" placeholder="Enter Address"/>
                    </div>
                    <div>
                    <a class="waves-effect waves-light btn"><i class="material-icons right">Submit</i></a>
                    </div>
                 </form>
            </div>
        </div>
        );
    }
}

export default Signup;