import ExpenseItem from './ExpenseItem'

export default function MainExpenseItem(props) {
  return (
    <>
      <ExpenseItem data={props.data[0]}/>
      <ExpenseItem data={props.data[1]}/>
      <ExpenseItem data={props.data[2]}/>
      <ExpenseItem data={props.data[3]}/>
    </>
  )
}