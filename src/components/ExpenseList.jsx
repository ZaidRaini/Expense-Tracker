import PropTypes from "prop-types";

const ExpenseList = ({ expenses, setExpenses }) => {
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} - ${expense.amount} - {expense.category}
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  setExpenses: PropTypes.func.isRequired,
};
export default ExpenseList;
