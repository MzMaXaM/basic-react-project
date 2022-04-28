import './ExpenseItem.css'
import Date from './Date'

export default function ExpenseItem(props){
  const data = props.data
  
  return(
    <div className='expense-item'>
      <Date data={data.date}/>
      <div className='expense-item__description'>
        <h2>{data.title}</h2>
        <div className='expense-item__price'>
          {data.amount}
        </div>
      </div>
    </div>
  )
}