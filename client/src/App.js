import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import homepage from './components/homepage'
import chefs from './components/chefs/chefs'
import login from './components/users/login'
import chefinfo from './components/chefs/chefInfo'
import signup from './components/users/signup'


class App extends Component {
  render () {
    return (
      <Router>
        
          <Switch>
            <Route exact path="/" component={homepage} />
            <Route exact path="/chefs" component={chefs}/>
            <Route exact path="/login" component={login}/>
           <Route exact path = "/chefinfo" component={chefinfo}/> 
           <Route exact path = "/signup"  component={signup}/>
          </Switch>
        
      </Router>
    )
  }
}

export default App