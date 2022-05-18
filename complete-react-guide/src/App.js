import AppRenderExp from "./components/Expenses/AppRenderExp";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Ps4 Headset",
			amount: 90.99,
			date: new Date(2022, 10, 6),
		},
		{
			id: "e2",
			title: "Laptop",
			amount: 1200.0,
			date: new Date(2022, 24, 8),
		},
		{
			id: "e3",
			title: "Shoes",
			amount: 204.57,
			date: new Date(2022, 4, 11),
		},
		{
			id: "e4",
			title: "Boss Weapons",
			amount: 420.69,
			date: new Date(2022, 12, 25),
		},
	];
	return (
		<div>
			<h2 className="end">End my Suffering</h2>
			<NewExpense />
			<AppRenderExp expenses={expenses} />
		</div>
	);
}

export default App;
