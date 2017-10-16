import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import homepage from './components/homepage'
import chefs from './components/chefs'
import axios from 'axios'



class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/home">Login</Link>
            </div>
            <div>
              <Link to="/chefs">Chefs</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={homepage} />
            <Route exact path="/chefs" component={chefs}/>
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App