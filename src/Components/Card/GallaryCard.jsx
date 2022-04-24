import React from 'react';
import '../Card/Card.css';


const GallaryCard = (props) => {
    return (
        <div className='gallary__card'>
            <img src={props.gallaryimg} alt="gallary" />
        </div>
    );
};

export default GallaryCard;