import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom'

class userInfo extends Component {
  state = {
    user: {}
  
    
  };
  getAllUser = async () => {
    console.log(this.props.match.params.id)
    const res = await axios.get(`/api/users/${this.props.match.params.id}`);
    console.log(res);
    this.setState({ user: res.data });
  };

  componentWillMount() {
    this.getAllUser();
  }

  
  render() {
    return (
    
      <div>
      <pre>{JSON.stringify(this.state.user)}</pre>
      <Navbar/>
      

      <div className="row">
              <div className="col s12 m6">
                <div className="card black darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{this.state.user.name}</span>
                    <h4>email:{this.state.user.email}</h4>
                    <h4>Phone:{this.state.user.phoneNumber}</h4>
                    <h4>address:{this.state.user.address}</h4>
                  </div>
                  <div className="card-action">
                  <div>
                                   
                    <a href='allUsers'>Back to users</a>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </div>







      

    
    );
  }
}

export default userInfo;