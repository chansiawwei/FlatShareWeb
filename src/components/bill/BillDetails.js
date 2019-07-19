import React, { Component } from 'react'
import {connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import LoadingDots from '../layout/LoadingDots'
import {deleteBill} from '../../store/actions/billActions'
class BillDetails extends Component {


  handleEdit = (e) => { 
    console.log("Edit button pressed.");
   
    alert("This feature hasnt been implemented, Soory..");
    
  }
  
  handleDelete = (id) => {

  console.log("Delete button pressed.");
  
  this.props.deleteBill(id);
  this.props.history.push('/');

  }
  
  
 
  render() {
    const {bill,auth}=this.props;
    const id = this.props.match.params.id;
    if(!auth.uid) return <Redirect to='/signin'/>
  if(bill) {
  return (
    <div className="container section bill-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title" contenteditable="false">Title: {bill.title}</span>
          <span className="card-title grey-text" contenteditable="false">Description: {bill.content}</span>
          <span className="card-title pink-text"contenteditable="false" >${bill.amount}</span>
          <span className="card-title green-text" contenteditable="false">Payto: {bill.payto}</span>

          

        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {bill.authorFirstName} {bill.authorLastName}</div>
          <div>{moment(bill.createdAt.toDate()).calendar() }</div>
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
    <div className="container center "><LoadingDots /></div>
   )
  }
}

const  mapStateToProps = (state,ownProps) =>{
  // console.log(state);
const id = ownProps.match.params.id;
const bills = state.firestore.data.bills;
const bill = bills ? bills[id] : null
return {
 bill: bill,
 auth:state.firebase.auth
}
}

const mapDispatchToProps = (dispatch,ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id)
  return {
    deleteBill: (id) => dispatch(deleteBill(id))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'bills'}      
  ])
)(BillDetails)
