import React from 'react'
import './myTransactions.css'
import DepositHistory from './Deposits/DepositHistory'
import WithdrawalHistory from './Withdrawals/WithdrawalHistory'

const MyTransactions = () => {

  return (
    <div className='my-transactions'>
      <h3>Transaction History</h3>
      <DepositHistory />
      <WithdrawalHistory/>
    </div>
  )
}

export default MyTransactions