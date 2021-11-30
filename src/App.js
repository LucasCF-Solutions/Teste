import React, { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import "./components/UI/App.css";
import "./components/Expenses/ExpenseList";
import Card from "./components/UI/Card.js";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    date: new Date(Date.UTC(2021, 9, 2)),
    title: "Car Insurence",
    value: 239.4,
    id: 1,
  },
  {
    date: new Date(Date.UTC(2021, 8, 3)),
    title: "buble head purchase",
    value: 12.4,
    id: 2,
  },
  {
    date: new Date(Date.UTC(2021, 7, 23)),
    title: "Mecanic bill",
    value: 1098.4,
    id: 3,
  },
  {
    date: new Date(Date.UTC(2021, 2, 21)),
    title: "Supermarket",
    value: 23.4,
    id: 4,
  },
  {
    date: new Date(Date.UTC(2021, 2, 21)),
    title: "Churrasco do finde",
    value: 599.4,
    id: 5,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const onAddExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Card className="app-style">
        <ExpenseList expenses={expenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default App;
