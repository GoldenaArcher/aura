import React from 'react'
import ReactCalendar from 'react-calendar';
import Card from '../card';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
    return <Card className='calendar-container'>
        <div>
        {/* Card */}
        <ReactCalendar/>
        </div>
    </Card>
}

export default Calendar;