import React , {useState , useEffect} from 'react'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

let Dummy_Expense = [];



const App = () => {

  const[expenses, setExpenses]= useState(Dummy_Expense);


 function fetchData(){
  
  fetch ('https://fakestoreapi.com/products?limit=5').then(
    response => {
      return response.json();
    }
  ).then(
    data => {
      // console.log(data);
      setExpenses(data);
    }
  );

 }

  useEffect(()=>{

    fetchData();

 

},[]);
  


       // ---> for single data
  // let ExpenseDate = new Date (2023,7,27);
  // let ExpenseTitle = "Car Insurancee";
  // let ExpenseAmount = 500;

   
    const addExpenseHandler =(expense)=>{


      fetch('https://fakestoreapi.com/products/5',{
        method: 'POST',
        body: JSON.stringify(expense),
        headers : {
          'content-Type' : 'application/json'
        }
      }).then(
        response =>{

          fetchData();

        }
      );






    }



  return (
    <div>
    
    
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses item={expenses}/>




    </div>

  )
}

export default App