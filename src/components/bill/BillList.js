import React from 'react'
import BillSummary from './BillSummary'
import {Link} from 'react-router-dom'

const BillList = ({bills}) => {
  return (
    <div className="bill-list section">
    {bills && bills.map(bill => {
        return(
          <Link to={'/bill/' + bill.id} key={bill.id}> 
            <BillSummary bill={bill} />
            </Link>
        )
    })}


    </div>
  )
}

export default BillList