// import React ,{useState} from "react"

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2023,0,16);
  // const expenseTitle = 'Car Insurance'
  // const expenseAmount = 294.67
  // const [title,setTitle] = useState(props.title) // state function 
  // let title = props.title
  // const clickHandler = () => {
  //    setTitle('Updated !')
  //   console.log(title)
  // }

  return (

    <Card className="expense-item ">
      {/* date */}
      <ExpenseDate date={props.date} />
      {/* title */}
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        {/* amount */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
        {/* <button onClick={clickHandler}>Change title!</button> */}
    </Card>
  );
}

export default ExpenseItem;
