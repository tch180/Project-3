import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import homepage from './components/homepage'
import axios from 'axios'



class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/">login</Link>
            </div>
            <div>
              <Link to="/home">home</Link>
            </div>
            <div>
              <Link to="/chefs">Chefs</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={homepage} />
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App