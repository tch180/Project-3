import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

class userInfo extends Component {
  state = {
    user: {
      name:'',
      email: '',
      phone:'',
      address:'',
    },
    redirectToAllUser: false
  
    
  }
  getAllUser = async () => {
    console.log(this.props.match.params.id)
    const res = await axios.get(`/api/users/${this.props.match.params.id}`);
    console.log(res);
    this.setState({ user: res.data });
  }

  deleteUser = async () => {
    const userid = this.props.match.params.id
    console.log(userid)
    const res = await axios.delete(`/api/users/${userid}`)
    console.log(res.data)
    this.setState({redirectToAllUser: true })
  }

  handleChange = (event)=> {
    const attribute = event.target.name
    const updateUser = {...this.state.users}
    updateUser[attribute] = event.target.value
    console.log('user saved')
    this.setState({user: updateUser })
  }

  editUser = async () => {
    const userid = this.props.match.params.id
        const res = await axios.patch(`/api/users/${userid}`, {
          users: this.state.users,
        })
        this.setState({ user: res.data, redirectToAllUser: true })
      }


  handleSubmit = async (event)=> {
    event.preventDefault()
    const res = await axios.post
    this.props.updateUser(this.state.newUser)
    const emptyForm = {
      name:'',
      email: '',
      phone:'',
      address:'',
    }
    this.setState({newUser: emptyForm})
  }


  componentWillMount() {
    this.getAllUser();
  }

  
  render() {
    if (this.state.redirectToAllUser){
      return <Redirect to={`/allUsers`}/>
    }
    return <div>
        <pre>{JSON.stringify(this.state.user)}</pre>
        <Navbar />



        
                    <div>
                            <label>Name:{this.state.user.name}</label>
                            <input type="text" placeholder={this.state.user.name}/>
                    </div>
                    <div>
                            <label>Phone Number:</label>
                            <input type="text" placeholder={this.state.user.phonenumber}/>
                    </div>
                    <div>
                            <label>Email:</label>
                            <input type="email" placeholder={this.state.user.email}/>
                    </div>
                    <div>
                            <label>Address:</label>
                            <input type="text" placeholder={this.state.user.address}/>
                    </div>
                    <div> <button onClick={this.deleteUser}>Delete</button>
                    </div>
               
        

        
                  <button href="/allUsers">Back to users</button>
                 
                  <br />
                  <button onClick={this.handleChange}>Update</button>
                </div>
           
  }
}

export default userInfo;