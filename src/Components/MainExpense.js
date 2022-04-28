import ExpenseItem from './ExpenseItem'
import './MainExpense.css'

export default function MainExpenseItem(props) {
  return (
    <div className='expenses'>
      <ExpenseItem data={props.data[0]}/>
      <ExpenseItem data={props.data[1]}/>
      <ExpenseItem data={props.data[2]}/>
      <ExpenseItem data={props.data[3]}/>
    </div>
  )
}