import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-center'>All reviews ({reviews.length})</h1>
            <div className='container my-5'>
                {
                    reviews.map(review => <Reviews key={review.id} review={review} />)
                }
            </div>
        </div>
    );
};

export default AllReviews;