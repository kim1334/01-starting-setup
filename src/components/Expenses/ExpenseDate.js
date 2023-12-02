
import './ExpenseDate.css';

function ExpenseDate(props) {

  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" }); // 2-digit 2자리 숫자 형식으로 만들어줌.
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{year}</div>
      <div className='expense-date__year'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
