import React, { useState } from 'react';
import "./ExpenseItem.js";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter.js';

function ExpenseList(props) {
  //listener/updater da caixa de seleção da data
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log('ExpensesList.js');
      console.log(filteredYear);
  }


  return (
      <Card className="expense-list">
        <ExpensesFilter filteredYear = {filteredYear} onChangeFilter = {filterChangeHandler}/>
        {props.expenses.map((expenses)=> (
           <ExpenseItem
           key={expenses.id}
           date={expenses.date}
           title={expenses.title}
           value={expenses.value}
         />
        ))}
      </Card>
  );
}
export default ExpenseList;
