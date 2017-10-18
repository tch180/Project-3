import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import homepage from './components/homepage'
import chefs from './components/chefs/chefs'
import login from './components/users/login'
import chefinfo from './components/chefs/chefInfo'
import signup from './components/users/signup'
import allUsers from './components/users/allUsers'
import userInfo from './components/users/userInfo'


class App extends Component {
  render () {
    return (
      <Router>
        
          <Switch>
            <Route exact path="/" component={homepage} />
            <Route exact path="/chefs" component={chefs}/>
            <Route exact path="/login" component={login}/>
           <Route exact path = "/chef/:id/chefinfo" component={chefinfo}/> 
           <Route exact path = "/signup"  component={signup}/>
           <Route exact path = '/allUsers' component={allUsers}/>
           <Route exact path = '/users/:id/userInfo' component={userInfo}/>
          </Switch>
        
      </Router>
    )
  }
}

export default App