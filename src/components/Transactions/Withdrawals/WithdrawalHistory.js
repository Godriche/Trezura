import React, { useContext } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext'
import { TransactionItem } from '../TransactionItem'


const WithdrawalHistory = () => {
    const {withdrawals} = useContext(GlobalContext)
   
  return (
    <div className='deposit-history'>
      {
        withdrawals.map((withdraw) => <TransactionItem
            key={withdraw.id}
            name={withdraw.name}
            date={new Date()}
            avatar={withdraw.nameAvatar}
            amount={withdraw.amount}
        />)
      }

    </div>
  )
}

export default WithdrawalHistory