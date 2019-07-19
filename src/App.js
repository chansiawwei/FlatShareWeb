import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TodoDetails from './components/todo/TodoDetails'
import BillDetails from './components/bill/BillDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateTodo from './components/todo/CreateTodo'
import CreateBill from './components/bill/CreateBill'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route exact path='/todo/:id'component={TodoDetails} />
            <Route exact path='/bill/:id'component={BillDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route exact path='/createtodo' component={CreateTodo} />
            <Route exact path='/createbill' component={CreateBill} />




      </Switch>      
      </div>
      </BrowserRouter>
      );
  }
}

export default App;
