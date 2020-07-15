import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function AddTransaction () {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const newTrsansaction = {
            id: new Date().getUTCMilliseconds(),
            text,
            amount: +amount
        };
        console.log(new Date().getUTCMilliseconds());
        addTransaction(newTrsansaction);
        setText('');
        setAmount('');
    }

    return (  
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text"> Text </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value) }  placeholder="Enter text here...."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/> 
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value) } placeholder="Enter amount ..."/>
                </div>
                <button  className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;
