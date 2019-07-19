import React, { Component } from 'react'
import Notifications from './Notifications'
import TodoList from '../todo/TodoList'
import BillList from '../bill/BillList'
import {connect} from 'react-redux'
import {firestoreConnect} from  'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import LoadingDots from '../layout/LoadingDots'
class Dashboard extends Component{
render(){
    const {todos,auth,notifications,bills} = this.props


    //console.log(todos)
      if(!auth.uid) return <Redirect to='/signin'/>
    return(
        <div className="dashboard container">
        <div className="row">
        <h2 className="blue-text">Bills </h2>
          <div className="col s12 m6">
          {bills ? <BillList bills={bills}/>: <LoadingDots/>
          
          }
           <h2 className="blue-text">Todo's </h2>
           {todos ? <TodoList todos={todos}/>: <LoadingDots/>
          
        }
          </div>
          
       
          <div className="col s12 m5 offset-m1">
          <h2 className="blue-text">Notifications </h2>

          {notifications ? <Notifications notifications={notifications} />: <LoadingDots/>
          
        }
          </div>
        </div>
      </div>
    )
}
}

const mapStateToProps = (state) => {
  console.log(state)
    return {
      todos: state.firestore.ordered.todos,
      bills: state.firestore.ordered.bills,
      auth:state.firebase.auth,
      notifications: state.firestore.ordered.notifications
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'todos',orderBy: ['createdAt', 'desc']},
      { collection: 'bills',orderBy: ['createdAt', 'desc']},
      { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
  )(Dashboard)
  