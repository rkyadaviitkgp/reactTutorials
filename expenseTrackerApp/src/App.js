import React from 'react';
import './App.css';
import Header from './componennts/Header';
import Balance from './componennts/Balance';
import IncomeExpenses from './componennts/IncomeExpenses';
import TransactionList from './componennts/TransactionList';
import AddTransaction from './componennts/AddTransaction';
import {GlobalProvider} from './context/GlobalState'

function App () {
  
  //const [transaction, setTransaction] = useState([]);

    return (
      <GlobalProvider >
        <Header/>
        <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div> 
      </GlobalProvider>
    );

}

export default App;
