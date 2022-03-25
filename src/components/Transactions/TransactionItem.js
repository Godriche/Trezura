import { Fragment } from 'react'


import './TransactionItem.css'


export const TransactionItem = ({name, amount, date, avatar}) => {

  // console.log(date)
 
    const year = date.getFullYear()
    const month = date.toLocaleString('en-us', {month: 'long'})
    const day = date.toLocaleString('en-us', {day: '2-digit'})

  return (
    <Fragment>
    <div className="transaction-item">
    <div className="transaction_name_date">
    <h1 className="nameAvatar">{avatar}</h1>
        <div className="name_date">
            <p className='name'>{name}</p>
             <p className='date'><span>{day}</span><span>{month}</span> <span>{year}</span>
            </p> 
        </div>
    </div>
        <p className='amount'>${amount}</p>
    </div>
    </Fragment>
  )
}
