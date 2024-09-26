import { useState } from "react";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

const Wallet = ({ balance, setBalance }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [income, setIncome] = useState("");

  const addIncome = () => {
    if (!income || isNaN(income)) {
      enqueueSnackbar("Invalid income amount", { variant: "error" });
      return;
    }
    setBalance((prevBalance) => prevBalance + parseFloat(income));
    setIncome("");
    enqueueSnackbar("Income added successfully!", { variant: "success" });
  };

  return (
    <div>
      <h2>Wallet Balance: ${balance}</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Add Income"
      />
      <button onClick={addIncome}>Add to Wallet</button>
    </div>
  );
};

Wallet.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
};

export default Wallet;
