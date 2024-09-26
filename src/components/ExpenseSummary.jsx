import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import PropTypes from "prop-types";

const ExpenseSummary = ({ expenses }) => {
  const data = expenses.reduce((acc, curr) => {
    const existing = acc.find((item) => item.name === curr.category);
    if (existing) {
      existing.value += curr.amount;
    } else {
      acc.push({ name: curr.category, value: curr.amount });
    }
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={100}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

ExpenseSummary.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ExpenseSummary;
