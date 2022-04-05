import React from 'react';
import './review.css';

const View = (props) => {
    console.log(props);
    const { name, reviews, rating } = props.view;
    return (
        <div className='single-review'>
            <div className='shadow-lg rounded-lg card'>
                <h6 className='text-xl' style={{ color: 'tomato' }}>{rating} Stars</h6>

                <p>{reviews}</p>
                <h4>{name}</h4>
                <small style={{ color: 'gray' }} >Verified Purchaser</small>

            </div>

        </div>
    );
};

export default View;