import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
/* import { Redirect } from 'react-router-dom'



import { Link } from 'react-router-dom'
 */

class menu extends Component {
    state ={
        recipes:[]
    };
    getAllMenu = async () => {
        const res = await axios.get("/api/recipes")
        console.log(res.data)
        this.setState({recipes: res.data})
    }

componentWillMount() {
    this.getAllMenu();
}

    render() {
        return(
            <div>
             <Navbar/>
             </div>
        )
        this.state.recipes.map(recipe =>{

          
        return (
            <div>
             
               <div>
                <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
                </div> 
                }
            </div>
        );
             })
        
    }
}
export default menu;