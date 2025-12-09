import { Calendar } from './ui/calendar'
import * as React from 'react'


const CalendarC = () => {
const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div>
      (
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-lg border'
      />
      )
    </div>
  )
}

export default CalendarC
