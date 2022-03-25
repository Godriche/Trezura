import React from 'react'

const TransactionSummary = ({totalDeposits, totalWithdrawals}) => {
  return (
    <div className="mid-container summary">
        <div className="deposit-summary">
            <p>Deposits</p>
            <h1>${totalDeposits}</h1>
        </div>
        <div className="withdrawal-summary">
            <p>Withdrawal</p>
            <h1>${totalWithdrawals}</h1>
        </div>
    </div>
  )
}

export default TransactionSummary