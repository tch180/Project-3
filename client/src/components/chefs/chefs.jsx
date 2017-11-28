import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Chefstyle = styled.div`

card-content {
  background-color: #6b6464;

}

`








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
      <Chefstyle>
      
      <div>

        {/* <pre>{JSON.stringify(this.state.chefs)}</pre> */}

        <Navbar />
        
        {this.state.chefs.map(chef => {
          return (
            <div className="row" >
              <div className="col s12 m6">
                <div className="card black darken-1">
                  <div className="card-content white-text">
                    <span className="card-title"><h4>{chef.name} </h4></span>
                    <h5>specialty:{chef.specialty}</h5>
                    <h6>Price:{chef.price}/hr</h6>
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
</Chefstyle>

    )
  }
}


export default chefs;
