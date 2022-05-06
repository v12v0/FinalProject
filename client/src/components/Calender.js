import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'


function Calender() {
    const [date, setDate] = useState()

    return (
        <div className="mb-4 dark:bg-gray-700 rounded-2xl bg-white">
            <div className="shadow-lg rounded-2xl p-4">
                <p className='text-center text-black dark:text-white'>
                    Selected date: {date ? format(date, ' MMM dd, yyyy', { locale: enGB }) : 'none'}
                </p>
                <div>
                    <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
                </div>
            </div>        
        </div>
    )
}

export default Calender