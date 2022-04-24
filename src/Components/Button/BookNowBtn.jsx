import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../../Redux/BookingButtonSlice';

const BookNowBtn = () => {
    const dispatch = useDispatch();

    const trigerAndOpenModal = ()=> {
        dispatch(toggle(true));
    }

    return (
        <div>
            <button className='btn' onClick={trigerAndOpenModal}> Book Now </button>
        </div>
    );
};

export default BookNowBtn;