import React from 'react';
import { Button } from 'react-bootstrap';
import useData from '../Hooks/useData';
import Review from './Review';
import './review.css';

const Reviews = () => {
    const url = 'customer.json';
    const [data, setData] = useData(url);
    // console.log(data);
    return (
        <div className='reviews-container'>
            <div className='review'>
                {
                    data.map(review => <Review
                        key={data.id}
                        review={review}
                    ></Review>)
                }

            </div>

        </div>
    );
};

export default Reviews;