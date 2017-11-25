import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';





class Menu extends Component {







    render() {
        return (
            <div>
                <div>
                    {/* <Navbar /> */}
                </div>
                <div className="card large">
                    <div className="card sticky-action" style='overflow: visible;'>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/TEGE54L.jpg" alt='Tomato Soup' />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Menu;