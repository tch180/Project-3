import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';


class login extends Component {
    state= {
      newUser: {
        username:'',
        password:'',
      }
    }
  

  
  componentWillMount() {
    this.getAllUsers()

  }

  getAllUsers = async () => {
    try {
      const res = await axios('/api/secondchef')
      this.setState({users: res.data})
    } catch (err) {
    console.log(err)
  }
}

  handleChange = (event)=> {
    const attribute = event.target.name
    const updateUser = {...this.state.newUser}
    updateUser[attribute] = event.target.value
    console.log('user saved')
    this.setState({newUser: updateUser })
  }
  
  handleSubmit = async (event)=> {
    event.preventDefault()
    this.props.updateUser(this.state.newUser)
    const emptyForm = {
      userName: '',
      password: '',
    }
    this.setState({newUser: emptyForm})
  }
    render() {
        return (
          <div>
          <Navbar/>
        <div>
            <form onSubmit={this.handleSubmit} action="" >
              <div>
              <label hmtlFor="name">User-Name:</label>
                <input onChange={this.handleChange} name="username" id="name" placeholder='userName' value={this.state.newUser.UserName} />
              </div><br/>
              <div>
                <label htmlFor="password">Password:</label>
                <input onChange={this.handleChange} type="Password" name="password" placeholder='Enter Password' value={this.state.newUser.password} />
              </div><br/> 
              <div><a href="/chefs" class="waves-effect waves-light btn">Submit<i class="material-icons right"></i></a></div>
            </form>
            </div>
            </div>
          );
    }
}

export default login;