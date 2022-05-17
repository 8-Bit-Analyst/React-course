import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

//  simplified using given val, key with .map object
const AppRenderExp = (props) => {
	const expenses = props.expenses.map((val, key) => {
		return (
			<ExpenseItem
				title={val.title}
				amount={val.amount}
				date={val.date}
				key={key}
			/>
		);
	});

	return <div className="expenses">{expenses}</div>;
};

export default AppRenderExp;
