import React, { Fragment } from 'react'
import './../../Assats/css/FormCss/TimeSlot.css';

const TimeSlots = () => {
  return (
     <Fragment>
        <h3 className='textCenter fw-bold pb-12'>Available Slot</h3>
        <div className='TimeSlotContainer'>
            <div className='TimeSlotRow'>
                <span className='textCenter slot activeSlot'>9am-10am</span>
                <span className='textCenter slot btnOutlineWarn'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
                <span className='textCenter slot'>9am-10am</span>
                <span className='textCenter slot'>11am-12am</span>
            </div>
        </div>
     </Fragment>
  )
}

export default TimeSlots