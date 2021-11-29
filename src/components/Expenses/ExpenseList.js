import React, { useState } from 'react';
import "./ExpenseItem.js";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter.js';

function ExpenseList(props) {
  let itemList = [];
  //listener/updater da caixa de seleção da data
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log('ExpensesList.js');
      console.log(filteredYear);
  }

  props.expenses.forEach((item, index) => {
    console.log(item);
    if (item.date.toLocaleDateString("en-US", { year: "numeric" }) == filteredYear){
    itemList.push(
      <ExpenseItem
        key={index}
        date={item.date}
        title={item.title}
        value={item.value}
      ></ExpenseItem>
    );
    }
  });


  return (
      <Card className="expense-list">
        <ExpensesFilter filteredYear = {filteredYear} onChangeFilter = {filterChangeHandler}/>
        {props.items.map((expenses)=> (
           <ExpenseItem
           date={expenses.date}
           title={expenses.title}
           value={expenses.value}
         />
        ))}
      </Card>
  );
}
export default ExpenseList;
