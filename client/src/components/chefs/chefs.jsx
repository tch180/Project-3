import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link } from 'react-router-dom'

class chefs extends Component {
  state = {
    chefs: []
  };
  getAllChef = async () => {
    const res = await axios.get("/api/secondchef");
    console.log(res.data);
    this.setState({ chefs: res.data });
  };

  componentWillMount() {
    this.getAllChef();
  }
  render() {
    return (
      <div>

        {/* <pre>{JSON.stringify(this.state.chefs)}</pre> */}

        <Navbar />
        {this.state.chefs.map(chef => {
          return (
            <div className="row">
              <div className="col s12 m6">
                <div className="card black darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{chef.name} </span>
                    <h3>{chef.specialty}</h3>
                    <h4>{chef.price}</h4>
                  </div>
                  <div className="card-action">
                  <div><Link key={chef._id} to={`/chef/${chef._id}/chefinfo`}>Info</Link></div>)
                    <a href="#">Book Now!!</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

export default chefs;
