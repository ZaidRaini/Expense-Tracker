import AddExpenseForm from "./components/AddExpenseForm";
import Wallet from "./components/AddIncomeForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTrends from "./components/ExpenseTrends";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [balance, setBalance] = useLocalStorage("walletBalance", 5000);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  return (
    <div>
      <Wallet balance={balance} setBalance={setBalance} />
      <AddExpenseForm
        balance={balance}
        setBalance={setBalance}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
};

export default App;
