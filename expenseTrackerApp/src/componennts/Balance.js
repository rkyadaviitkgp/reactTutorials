import React,{useContext} from "react";
import {GlobalContext} from '../context/GlobalState';
function Balance() {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const sum = amounts.reduce((acc, item) => (acc +=item), 0)
    .toFixed(2);
    const sign = sum < 0 ? '-' : '+';
	return (
        <div>
            <h4> Your balance </h4>
            <h1 className="balance" >{sign}${sum}</h1>
        </div>
	);
}

export default Balance;
