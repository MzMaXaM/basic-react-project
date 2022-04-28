import MainExpenseItem from "./Components/MainExpense";

import expenses from "./data/exampleData";

function App() {
  return (
    <MainExpenseItem data={expenses}/>
  );
}

export default App;
