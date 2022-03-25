
import Footer from './components/Layout/Footer'
import Nav from './components/Layout/Nav'
import MyTransactions from './components/Transactions/MyTransactions'
import TransactionOverview from './components/Transactions/TransactionOverview'
import { GlobalContextProvider } from './Context/GlobalContext'



const App = () => {
  

  
  return (
    <GlobalContextProvider>
      <Nav />
      <TransactionOverview />
        <div className="mid-container">
          <MyTransactions />
        </div>
        <Footer/>
    </GlobalContextProvider>
  )
}

export default App