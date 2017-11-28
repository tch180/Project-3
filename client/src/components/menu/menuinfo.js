import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';





class Menu extends Component {
state = {
    menu:{}
}

getAllMenuInfo = async () => {
    const res = await axios.get(`/api/secondchef/recipes`);
    console.log(res.data);
    this.setState({menu: res.data})
};

componentWillMount() {
    this.getAllMenuInfo();
}







    render() {
        return (
            <div>
            <Navbar/>
                <div className="card small">
                    <div className="card sticky-action" >
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.state.menu.image} alt={this.state.menu.name}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{this.state.menu.name}<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        {/* <p>Here is some more information about this product that is only revealed once clicked on.</p> */}
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}
export default Menu;