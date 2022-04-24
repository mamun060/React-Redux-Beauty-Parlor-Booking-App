import React, { Fragment, useState } from 'react'
import { Calendar } from 'react-calendar';
import Select from 'react-select';
import './../../Assats/css/FormCss/BookingForm.css';

const BookingForm = () => {
    let initDate =  new Date();

    const [date, setDate] = useState(initDate);

    const onChange = date => {
        setDate(date);
    }

    return (
        <div className='BookingFormContainer'>
            <div className='Calendare-side'>

                <div className='SelectorWrap'>
                    <Select name="" id="" options={''}>
                        <option value="">Select....</option>
                        <option value="">Raju</option>
                        <option value="">Alauddin</option>
                        <option value="">Mahadi</option>
                    </Select>
                    <Select name="" id="">
                        <option value="">Select....</option>
                        <option value="">Raju</option>
                        <option value="">Alauddin</option>
                        <option value="">Mahadi</option>
                    </Select>
                </div>

                <div className='CalendareArea'>
                    <Calendar
                        onChange={onChange}
                        value={date}  
                    />
                </div>

            </div>

            <div className='timeslot-side'>
                <h2>Time slot area</h2>
            </div>
        </div>
    )
}

export default BookingForm