import React, { Component } from 'react';
import Navbar from '../Navbar'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class Signup extends Component {
        state= {
            users:[],
            redirectToAllUser: false,
            userId:''
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

                <form onSubmit={this.handleSubmit}>
                    <div>
                            <label htmlFor='name'>Name:</label>
                            <input onChange={this.handleChange} type="text" placeholder="Enter Name" value={this.state.users.name}/>
                    </div>
                    <div>
                            <label htmlFor='phoneNumber'>Phone Number:</label>
                            <input onChange={this.handleChange} type="tel" placeholder="Enter Phone Number" value={this.state.users.phoneNumber}/>
                    </div>
                    <div>
                            <label htmlFor='email' >Email:</label>
                            <input onChange={this.handleChange} type="email" placeholder="Enter Email Address"value={this.state.users.email}/>
                    </div>
                    <div>
                            <label htmlFor='address' >Address:</label>
                            <input type="text" placeholder="Enter Address" value={this.state.users.address}/>
                    </div>
                    <div>
                    <button  onClick={this.handleChange }>Submit </button>
                    </div>
                 </form>
            </div>
        </div>
        );
    }
}
//<button onClick={handleChange } >Update</button>
export default Signup;