import React from 'react'
import '../style/Expenses.css'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
  return (
    <div className='expenses'>

      {
        props.item.map(
          expense =>(
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.price} />
          )
        )
      }










        
        {/* <ExpenseItem
        date= {props.item[0].date} 
        title= {props.item[0].title}
        amount= {props.item[0].amount}/>

        <ExpenseItem
        date= {props.item[1].date} 
        title= {props.item[1].title}
        amount= {props.item[1].amount}/>

        <ExpenseItem
        date= {props.item[2].date} 
        title= {props.item[2].title}
        amount= {props.item[2].amount}/> */}
        </div>
  )
}

export default Expenses