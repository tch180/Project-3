import React, { Component } from 'react';
import Navbar from '../Navbar'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

const Formstyle = styled.div`


label {
  color: black;
  border-bottom: 2px solid black;
}

`



class Signup extends Component {
        state= {
            users:[],
            redirectToAllUser: false,
            userId: '',
            
        }


handleChange = (event)=>{
    const attribute = event.target.name
    console.log('change')
    const updateUser = {...this.state.users}
    updateUser[attribute] = event.target.value
    this.setState({users: updateUser})
}

handleSubmit = async (event)=> {
    event.preventDefault()
    console.log('submit')
    const res = await axios.post('/api/users', {
        
        'user' : this.state.users
        
    })
    console.log(res.data)
    this.setState({redirectToUsers: true, userId: res.data._id})
}


    render() {
        if (this.state.redirectToAllUser){
            return <Redirect to={`/allUsers`}/>
          }
        return (
        <div>
        <Navbar/> 
            <div>
            <Formstyle>
                <form onSubmit={this.handleSubmit}>
                    <div>
                            <label htmlFor='name'>Name:</label>
                            <input onChange={this.handleChange} type="text" placeholder="Enter Name"  name="name" value={this.state.users.name}/>
                    </div>
                    <div>
                            <label htmlFor='phoneNumber'>Phone Number:</label>
                            <input onChange={this.handleChange} type="text" placeholder="Enter Phone Number" name="phoneNumber" value={this.state.users.phoneNumber}/>
                    </div>
                    <div>
                            <label htmlFor='email' >Email:</label>
                            <input onChange={this.handleChange} type="email" placeholder="Enter Email Address" name="email" value={this.state.users.email}/>
                    </div>
                    <div>
                            <label htmlFor='address' >Address:</label>
                            <input type="text" placeholder="Enter Address" name="address" value={this.state.users.address}/>
                    </div>

                    <div>
                    <button>Submit </button>
                    </div>
                 </form>
                 </Formstyle>

            </div>
        </div>
        );
    }
}
//<button onClick={handleChange } >Update</button>
export default Signup;