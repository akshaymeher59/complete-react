import React,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = ( props ) => {
  const[enteredTitle, setEnteredTitle] = useState('');
  const[enteredAmmount, setEnteredAmmount] = useState('');
  const[enteredDate, setEnteredDAte] = useState('');

  // const[userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmmount: '',
  //   enteredDate:''
  // })

  const titleChangeHandler= (event)=>{
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

const ammountChangeHandler = (event)=>{
  setEnteredAmmount(event.target.value);
  // setUserInput({
  //   ...userInput,
  //   enteredAmmount: event.target.value
  // })
}

const dateChangeHandler = (event)=>{
  setEnteredDAte(event.target.value);
  // setUserInput({
  //   ...userInput,
  //   enteredDate: event.target.value
  // })
}


const submitHandler=( event )=>{
  event.preventDefault();

  const expenseData={
    title: enteredTitle,
    amount: enteredAmmount,
    date: new Date(enteredDate)
  }

  props.onSaveExpenseData(expenseData);
  setEnteredTitle('');
  setEnteredAmmount('');
  setEnteredDAte('');
}

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={ titleChangeHandler }/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmmount}  onChange={ammountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31'value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
