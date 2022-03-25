 const AppReducer = (state, action) => {
     switch(action.type){
         case 'ADD_DEPOSIT':
            return {
                ...state,
                deposits:[ ...state.deposits, action.payload]
            }
        case 'MAKE_WITHDRAWAL':
            return {
                  ...state,
                withdrawals:[ ...state.withdrawals, action.payload]
                }
         default:
             return state
     }
 }

 export default AppReducer