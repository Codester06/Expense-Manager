// import ExpenseItem from "./Components/ExpenseItem";
import React , {useState} from "react"
import Expense from "./Components/Expenses/Expense";
import NewExpenses from "./Components/newExpenses/newExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Monitored desk",
    amount: 4500,
    date: new Date(2023, 0, 15),
  },
];

function App() {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // console.log('app.js');
    // console.log(events);
    setExpenses((prevExpenses => {
      return [expense, ...prevExpenses];
    }))
  }
  return (
    <div>

      <NewExpenses onAddExpense={addExpenseHandler} />
      {/* <p>codester</p> */ }
      <Expense items = {expenses} />
      </div>
  );
}

export default App;




// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "The Codester"),
//   React.createElement(Expense, { items: expenses })
// );