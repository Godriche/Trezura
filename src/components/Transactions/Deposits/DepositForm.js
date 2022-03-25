import React, { Fragment, useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Sheet from 'react-modal-sheet'
import '../TransactionForm.css'
import { GlobalContext } from '../../../Context/GlobalContext';



const DepositForm = ({isOpen, onCloseForm}) => {
  
const {addDeposit} = useContext(GlobalContext)

const [deposit, setDeposit] = useState({
    name: "",
    amount: "",
    date: new Date()
})

const onChangeDeposit = (e) => {
    setDeposit({...deposit, [e.target.name]:e.target.value})
} 

const formSubmitHandler = (e) => {
    e.preventDefault()

    const newDepositAction = {
        id: uuidv4(),
        name: deposit.name,
        amount: deposit.amount * 1,
        date: deposit.date
    }

    addDeposit(newDepositAction)

    setDeposit({
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
                 <h4>Add Deposit</h4>
             </Sheet.Header>
             <Sheet.Content>
          <form onSubmit={formSubmitHandler}>
            <div className="transaction-form-control">
                <label htmlFor="">Name:</label>
                <input 
                type="text" 
                required 
                name="name"
                value={deposit.name}
                onChange={onChangeDeposit}
                />
            </div>
            <div className="transaction-form-control">
                <label htmlFor="">Amount:</label>
                <input 
                type="number" 
                required
                value={deposit.amount}
                name="amount"
                min="50.00" 
                step="0.01" 
                onChange={onChangeDeposit}
                />
            </div>
            <div className="transaction-form-control">
                <label htmlFor="">Date:</label>
                <input 
                type="date" 
                required                 
                min="2022-01-01"
                onChange={onChangeDeposit}
                />
            </div>

            <button className='form-button' type="submit">Deposit</button>
            </form>
             </Sheet.Content>
         </Sheet.Container>

        </Sheet>
        
    </Fragment>
  )

}

export default DepositForm