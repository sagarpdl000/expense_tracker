import React from 'react'
import '../style/ExpenseItem.css'

function ExpenseItem() {
  return (

    <div className="expense-item">
        <div>July 11, 2023</div>
        <div className="expense-item__description">
            <h2>Car Insurence</h2>
            <div className="expense-item__price">$450</div>
        </div>

    </div>
    
  );
}

export default ExpenseItem