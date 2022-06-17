
import Wrapper from "../../assets/wrappers/tableWrapper"
import React from 'react'

type Props = {
  name:string
  price:number
  amount:number
}

const Table = (props: Props) => {
  return (
    <Wrapper>
    <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-4">Name</div>
      <div className="col col-4">Price</div>
      <div className="col col-4">Amount</div>
    </li>
    <li className="table-row">
      <div className="col col-4" data-label="Job Id">{props.name}</div>
      <div className="col col-4" data-label="Customer Name">{props.price}</div>
      <div className="col col-4" data-label="Amount">{props.amount}</div>

    </li>
  
  </ul>
  </Wrapper>


)
}

export default Table