import { createContext, useEffect, useReducer } from "react"
import AppReducer from "./AppReducer"



const initialState = {
    deposits: JSON.parse(localStorage.getItem("deposits")) || [],
     withdrawals: JSON.parse(localStorage.getItem("withdrawals")) || []
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

     useEffect(() => {
        localStorage.setItem("deposits", JSON.stringify(state.deposits))
        localStorage.setItem("withdrawals", JSON.stringify(state.withdrawals))
     });

    const addDeposit = (depositAction) => {
       dispatch({
        type: 'ADD_DEPOSIT',
        payload: depositAction
       })
    }

    const makeWithdrawal = (withdrawalAction) => {
        dispatch({
         type: 'MAKE_WITHDRAWAL',
         payload: withdrawalAction
        })
     }

    return(
        <GlobalContext.Provider
            value={{
                deposits: state.deposits,
                withdrawals: state.withdrawals,
                addDeposit,
                makeWithdrawal
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}