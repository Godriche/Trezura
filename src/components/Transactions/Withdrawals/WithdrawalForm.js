import React, { Fragment, useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Sheet from 'react-modal-sheet'
import '../TransactionForm.css'
import { GlobalContext } from '../../../Context/GlobalContext';



const WithdrawalForm = ({isOpen, onCloseForm}) => {
  
const {makeWithdrawal} = useContext(GlobalContext)

const [withdraw, setWithdraw] = useState({
    name: "",
    amount: "",
    date: new Date()
})

const onChangeWithdraw = (e) => {
    setWithdraw({...withdraw, [e.target.name]:e.target.value})
} 

const formSubmitHandler = (e) => {
    e.preventDefault()

    const newWithdrawAction = {
        id: uuidv4(),
        name: withdraw.name,
        amount: withdraw.amount * 1,
        date: withdraw.date
    }
    console.log(newWithdrawAction)
    makeWithdrawal(newWithdrawAction)

    setWithdraw({
        name: "",
        amount: "",
        date: ""
    })

  
}

 


  return (
    <Fragment>
          
        <Sheet
         snapPoints={[0.45]}
          isOpen={isOpen}
          onClose={onCloseForm}         
        >
         <Sheet.Container>
             <Sheet.Header>
                 <h4>Make Withdrawal</h4>
             </Sheet.Header>
             <Sheet.Content>
          <form onSubmit={formSubmitHandler}>
            <div className="transaction-form-control">
                <label htmlFor="">Name:</label>
                <input 
                type="text" 
                required 
                name="name"
                value={withdraw.name}
                onChange={onChangeWithdraw}
                />
            </div>
            <div className="transaction-form-control">
                <label htmlFor="">Amount:</label>
                <input 
                type="number" 
                required
                value={withdraw.amount}
                name="amount"
                min="50.00" 
                step="0.01" 
                onChange={onChangeWithdraw}
                />
            </div>
            <div className="transaction-form-control">
                <label htmlFor="">Date:</label>
                <input 
                type="date" 
                required                 
                min="2022-01-01"
                onChange={onChangeWithdraw}
                />
            </div>

            <button className='form-button' type="submit">Withdraw</button>
            </form>
             </Sheet.Content>
         </Sheet.Container>

        </Sheet>
        
    </Fragment>
  )


}

export default WithdrawalForm