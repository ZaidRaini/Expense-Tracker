import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import PropTypes from "prop-types";

const ExpenseTrends = ({ expenses }) => {
  const data = expenses.reduce((acc, curr) => {
    const existing = acc.find((item) => item.category === curr.category);
    if (existing) {
      existing.amount += curr.amount;
    } else {
      acc.push({ category: curr.category, amount: curr.amount });
    }
    return acc;
  }, []);

  return (
    <BarChart width={400} height={400} data={data}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#82ca9d" />
    </BarChart>
  );
};

ExpenseTrends.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default ExpenseTrends;
