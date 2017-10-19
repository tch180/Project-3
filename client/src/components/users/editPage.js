import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

import axios from 'axios'

class EditPage extends Component {
    state = {

       editedUser: {
            userName: '',
            password: '',
        },
        redirectToHomePage: false,
        newUserEdited: '',

   }

   // async componentWillMount () {
    //     const { newUserEdited } = this.props.match.params
    //       const res = await axios.get(`/api/users/${newUserEdited}`)
    //       this.setState({editedUser: res.data})

   // } 

   // every time a user makes an input
    handleChange = (event) => {
        //equal to name attribute
        const attribute = event.target.name
        // cloning this.state.newUser
        const updateTheUser = { ...this.state.editedUser }


       //dynamically updating the object
        //event.target.value is equal to what user is typing
        updateTheUser[attribute] = event.target.value
        this.setState({ editedUser: updateTheUser })
    }

   handleSubmit = async (event) => {
        event.preventDefault()//doesnt allow form to reload page

       const newUserEdited = this.state.editedUser._id

       const res = await axios.patch(`/api/users/${this.props.userId}`, {
            'user': this.state.editedUser
        })
        // After the post is complete, set the state to trigger the redirect
        // and add the newly editeduser  to state so we can change the route
        console.log(res.data)
        this.props.updateUser(res.data)
       

   }






   render() {
        //if statement is triggered after edited user is successful
        if (this.state.redirectToHomePage) {
            return <Redirect to={`${this.state.newUserEdited}`} />
        }
    

       return (
            <div>
                <h1>Edit yo stuff</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='userName'>User Name</label>
                        <input
                            onChange={this.handleChange}
                            name='userName'
                            type='text' value={this.state.editedUser.userName}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.handleChange}
                            value={this.state.editedUser.password}
                            name='password' type='text' />
                    </div>
                   <input type='submit' value='Edit'/>
                </form>
            </div>
        )
    }
}

export default EditPage;