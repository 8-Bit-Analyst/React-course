import ExpenseItem from "./ExpenseItem";

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
