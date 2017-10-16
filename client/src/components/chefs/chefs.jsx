import React, { Component } from 'react';
import axios from 'axios'



class chefs extends Component {

  /* state={
    chef: {
      name:"",
      bio:"",
    }
  }

  async componentWillMount () {
    const { chefsId } = this.props.match.params
    const res = await axios.get(`/api/chefs/${chefsId}`)
    console.log(res.data)
    this.setState({chefs: res.data})
  }
 */



    render() {
     return (

            
      <div class="row">
        <div class="col s12 m6">
          <div class="card black darken-1">
            <div class="card-content white-text">
              <span class="card-title">Chef Name </span>
              <h3>name:</h3>
              <h3>specialty:</h3>
            </div>
            <div class="card-action">
              <a href="../chefinfo">Information</a>
              <a href="#">Book Now!!</a>
            </div>
          </div>
        </div>
      </div>
            
     );
    }
}



export default chefs;