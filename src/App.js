import React from 'react'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'


const App = () => {

       // ---> for single data
  // let ExpenseDate = new Date (2023,7,27);
  // let ExpenseTitle = "Car Insurancee";
  // let ExpenseAmount = 500;

    let expense = [
        {
          id: 'e1',
          date: new Date(2023, 7, 21),
          title: 'Car Insurence',
          amount: 600
        },
        {
          id: 'e2',
          date: new Date(2023, 7, 24),
          title: 'College fee',
          amount: 6000
        },
        {
          id: 'e3',
          date: new Date(2023, 7, 28),
          title: 'Car EMI',
          amount: 850
        }
    ]



  return (
    <div>
    
    
    <NewExpense/>
    <Expenses item={expense}/>




    </div>

  )
}

export default App