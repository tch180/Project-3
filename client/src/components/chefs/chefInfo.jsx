import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom'
class chefinfo extends Component {
  state = {
    chef: {}
  
    
  };
  getAllChef = async () => {
    const res = await axios.get(`/api/secondchef/${this.props.match.params.id}`);
    console.log(res.data.id);
    this.setState({ chef: res.data });
  };

  componentWillMount() {
    this.getAllChef();
  }
  render() {
    return (
    
      <div>
      <pre>{JSON.stringify(this.state.chefs)}</pre>
      <Navbar/>
      

      <div className="row">
              <div className="col s12 m6">
                <div className="card black darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{this.state.chef.name}</span>
                    <h4>Specialty:{this.state.chef.specialty}</h4>
                    <h4>bio:{this.state.chef.bio}</h4>
                    <h4>Price:{this.state.chef.price}</h4>
                  </div>
                  <div className="card-action">
                  <div>
                    <a href="#">Book Now!!</a>
                    <a href='/chefs'>Back to Chefs</a>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </div>







      

    
    );
  }
}

export default chefinfo;