import React, {useState} from "react";

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

 const [title, setTitle] = useState( 0);
  const arr=  useState( 0);
  console.log("Arr = "+arr);
  const clickHandler= ()=>{
    setTitle(title + 1);
    console.log(title);
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    <button onClick={ clickHandler } > </button>
    </Card>
  );
}

export default ExpenseItem;
