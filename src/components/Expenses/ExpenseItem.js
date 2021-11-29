import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenseItem = (props) =>{
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> {props.value}</div>
      </div>
     
    </Card>
  );
  }

export default ExpenseItem;
