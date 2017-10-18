import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link } from 'react-router-dom'

class users extends Component {
  state = {
    users: []
  };
  getAllChef = async () => {
    const res = await axios.get("/api/users");
    // console.log(res.data);
    this.setState({ users: res.data });
  };

  handleDelete= async (event) =>{
    event.predentDefault()
    this.props.deleteUser(this.state.user)
  }
  deleteUser = async (userId) => {
    const userId = this.props.match.params._id
    const id = userId
    const res = await.axios.delete('/api/users/${userId}')
  }
  componentWillMount() {
    this.getAllChef();
  }
  render() {
    return (
      <div>

        <pre>{JSON.stringify(this.state.user)}</pre>

        <Navbar />

        {this.state.users.map(user => {
          return (
            <div className="row">
              <div className="col s12 m6">
                <div className="card black darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{user.name} </span>
                    <h3>{user.phoneNUmber}</h3>
                    <h4>{user.email}</h4>
                    <h4>{user.address}</h4>
                  </div>
                  <div className="card-action">
                  <div><Link key={user._id} to={`/users/${user._id}/userInfo`}>Edit</Link></div>
                    <button onClick={this.props.deleteUser}>Delete</button>
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

export default users;
