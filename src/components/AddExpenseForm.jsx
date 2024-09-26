import { useSnackbar } from "notistack";
import { useState } from "react";
import PropTypes from "prop-types";

const AddExpenseForm = ({ balance, setBalance, expenses, setExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const addExpense = () => {
    if (!title || !amount || isNaN(amount) || !category) {
      enqueueSnackbar("Please fill all fields", { variant: "error" });
      return;
    }
    if (parseFloat(amount) > balance) {
      enqueueSnackbar("Not enough balance", { variant: "warning" });
      return;
    }
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
    };
    setExpenses([...expenses, newExpense]);
    setBalance(balance - parseFloat(amount));
    setTitle("");
    setAmount("");
    enqueueSnackbar("Expense added successfully!", { variant: "success" });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
      </select>
      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
};

AddExpenseForm.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
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

export default AddExpenseForm;
