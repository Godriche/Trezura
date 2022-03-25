import React, { useContext } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext'
import { TransactionItem } from '../TransactionItem'


const DepositHistory = () => {
    const {deposits} = useContext(GlobalContext)
   
  return (
    <div className='deposit-history'>
      {
        deposits.map((deposit) => <TransactionItem
            key={deposit.id}
            name={deposit.name}
            date={new Date()}
            avatar={deposit.nameAvatar}
            amount={deposit.amount}
        />)
      }

    </div>
  )
}

export default DepositHistory