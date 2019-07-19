import React, { Component } from 'react'

import {connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import {deleteTodo} from '../../store/actions/todoActions'


class TodoDetails extends Component {
  
  handleEdit = (e) => {
    console.log("Edit button pressed.");
    alert("This feature hasnt been implemented, Soory..");

  }
  
  handleDelete = (id) => {

  console.log("Delete button pressed.");
  
  this.props.deleteTodo(id);
  this.props.history.push('/');

  }
  
  render() {

const {todo,auth}=this.props;
const id = this.props.match.params.id;

if(!auth.uid) return <Redirect to='/signin'/>
if(todo) {
  return(
 <div className="container section todo-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{todo.title}</span>
          <span className="card-title grey-text">Description: {todo.content}</span>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
          <div>{moment(todo.createdAt.toDate()).calendar() }</div>
          <div>
            <br/>

          <button className="btn green lighten-1 z-depth-0" onClick={this.handleEdit} >Edit</button>
          
          <button className="btn red lighten-1 z-depth-0" onClick={() => this.handleDelete(id)} >Delete</button>
          </div>
        </div>
      
      </div>
    </div>
    )
}
return (
   <div className="container center"><p>Loading Todos....</p></div>
  )
}
}
const  mapStateToProps = (state,ownProps) =>{
     // console.log(state);
  const id = ownProps.match.params.id;
  const todos = state.firestore.data.todos;
  const todo = todos ? todos[id] : null
  return {
    todo: todo,
    auth:state.firebase.auth
  }
  }

  const mapDispatchToProps = (dispatch,ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id)
    return {
      deleteTodo: (id) => dispatch(deleteTodo(id))
    }
  }

  export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
      { collection: 'todos'}      
    ])
  )(TodoDetails)
  