import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",

    title: "Toilet Paper",
    amount: 294.7,
    date: new Date(2022, 7, 11),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 294.7,
    date: new Date(2022, 4, 21),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.7,
    date: new Date(2022, 6, 10),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 294.7,
    date: new Date(2021, 2, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
