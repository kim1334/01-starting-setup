import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses() {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 11, 29),
    },
    {
      id: "e2",
      title: "Car 2323",
      amount: 300.67,
      date: new Date(2023, 11, 29),
    },
    {
      id: "e3",
      title: "Car 4343",
      amount: 450.67,
      date: new Date(2023, 11, 29),
    },
    {
      id: "e4",
      title: "Car 5454",
      amount: 294.67,
      date: new Date(2023, 11, 29),
    },
  ];
  
 
  return (
    <Card className="expenses">
      <ExpenseItem
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}
      />
      <ExpenseItem
        date={expense[1].date}
        title={expense[1].title}
        amount={expense[1].amount}
      />
      <ExpenseItem
        date={expense[2].date}
        title={expense[2].title}
        amount={expense[2].amount}
      />
        <ExpenseItem
        date={expense[3].date}
        title={expense[3].title}
        amount={expense[3].amount}
      />
      </Card>
  );
}

export default Expenses;
