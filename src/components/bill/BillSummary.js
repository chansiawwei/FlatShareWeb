    
import React from 'react'
import moment from 'moment'

const BillSummary = ({bill}) => {
  return (
    <div className="card z-depth-0 bill-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{bill.title}</span>
        <span className="card-title pink-text">${bill.amount}</span>
        <span className="card-title green-text">PayTo: {bill.payto}</span>


        <p>Posted by {bill.authorFirstName} {bill.authorLastName}</p>
        <p className="grey-text">{moment(bill.createdAt.toDate()).calendar() }</p>
      </div>
    </div>
  )
}

export default BillSummary