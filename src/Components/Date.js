import './Date.css'

export default function Date(props){
  const data = props.data
  const year = data.getFullYear()
  const month = data.toLocaleString('en-US', { month: 'long' })
  const day = data.toLocaleString('en-US', { day: '2-digit' })
  
  return(
    <div className='expense-date'>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
}