import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createBill} from '../../store/actions/billActions'
import {Redirect} from 'react-router-dom'

class CreateBill extends Component {
  state = {
    title: '',
    content: '',
    amount:'',
    payto:''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createBill(this.state);
    this.props.history.push('/');

  }
  render() {
    const {auth}=this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a Bill</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Bill Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Bill Content</label>
          </div>
          <div className="input-field">
            <textarea id="amount" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="amount">Bill Amount</label>
          </div>
          <div className="input-field">
            <textarea id="payto" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="payto">Pay to</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return {
    auth: state.firebase.auth
  }}


const mapDispatchToProps = dispatch => {
  return {
    createBill: (bill) => dispatch(createBill(bill))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateBill)