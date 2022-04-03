import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const CustomerReviews = () => {
    const [reviews, setReviews] = useReviews();
    const shortReviews = reviews.slice(0, 3);
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-center'>Customer Reviews ({shortReviews.length})</h1>
            <div>

                <Row xs={1} md={3} className="g-4 p-5 w-100 overflow-hidden">
                    {
                        shortReviews.map(review => <Reviews key={review.id} review={review} />)
                    }
                </Row>
                <div className="d-flex justify-content-center mb-5">
                    <Button onClick={() => navigate('/reviews')}>See All Reviews</Button>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;