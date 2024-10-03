import React from 'react';
//styles
import "./Transactions.css";
import TransactionsBody from '../TransactionsBody /TransactionsBody';
//components

const Transactions = () => {
    return (
        <div className='Transactions'>
            <h2>Recent Transactions</h2>
            <TransactionsBody />
        </div>
    );
};

export default Transactions;
