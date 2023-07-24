import React , {useState} from 'react'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

let Dummy_Expense = [
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
];



const App = () => {

  const[expenses, setExpenses]= useState(Dummy_Expense);

  
  


       // ---> for single data
  // let ExpenseDate = new Date (2023,7,27);
  // let ExpenseTitle = "Car Insurancee";
  // let ExpenseAmount = 500;

   
    const addExpenseHandler =(expense)=>{
      const updatedExpense =[expense, ...expenses]

      setExpenses(updatedExpense);

    }



  return (
    <div>
    
    
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses item={expenses}/>




    </div>

  )
}

export default App