import React, { useContext, useState } from 'react'
import './TransactionOverview.css'
import { FaArrowDown, FaEye, FaPlus} from 'react-icons/fa'
import TransactionSummary from './TransactionSummary'
import DepositForm from './Deposits/DepositForm'
import WithdrawalForm from './Withdrawals/WithdrawalForm'
import { GlobalContext } from '../../Context/GlobalContext'

const TransactionOverview = () => {

  const {deposits, withdrawals} = useContext(GlobalContext)

  const depositsAmount = deposits.map((deposit) => deposit.amount)
  const withdrawalsAmount = withdrawals.map((withdrawal) => withdrawal.amount )
 

  const totalDeposits = depositsAmount
                          .reduce((acc, item) => (acc += item), 0)
                          .toFixed(2)
                          
  const totalWithdrawals = withdrawalsAmount
                          .reduce((acc, item) => (acc += item), 0)
                          .toFixed(2)

   
 
  const [isOpenDeposit, setOpenDeposit] = useState(false)
  const [isOpenWithdrawal, setOpenWithdrawal] = useState(false)

  const depositClickHandler = () => {
    setOpenDeposit(true)
  }

  const withdrawalClickHandler = () => {
    setOpenWithdrawal(true)
  }

  

  const closeDepositFormhandler = () => {
    setOpenDeposit(false)
}


    const closeWithdrawalFormhandler = () => {
  setOpenWithdrawal(false)
}

 


  
  return (
    <div className='overview-wrapper'>
      <DepositForm isOpen={isOpenDeposit} onDeposit={depositClickHandler} onCloseForm={closeDepositFormhandler}/>

      <WithdrawalForm isOpen={isOpenWithdrawal} onDeposit={withdrawalClickHandler} onCloseForm={closeWithdrawalFormhandler}/> 
     
        <div className="mid-container">
            <div className="overview">
                <div className="transaction-balance">
                  <p>Total Balance</p>
                  <h1>${(totalDeposits - totalWithdrawals).toFixed(2)} </h1>
                  </div>
                  <hr />
                  <div className="transaction-control-icons">
                    <div className="deposit-icon">
                  <button onClick={depositClickHandler}>
                      <FaPlus/>
                  </button>
                 <p> Deposit</p></div>
                 <div className="withdrawal-icon">
                 <button onClick={withdrawalClickHandler}>
                      <FaArrowDown/>
                  </button> <p>
                    Withdraw</p></div>
                 <div className="transactions-list-icon">
                 <button>
                      <FaEye/>
                  </button><p>
                    View All</p></div>
                    </div>
            </div>
        </div>      
        <TransactionSummary 
        totalWithdrawals={totalWithdrawals}
        totalDeposits={totalDeposits}
         />
    </div>
  )
}

export default TransactionOverview