import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Reviews = ({ review }) => {
    return (
        <div className='mb-4'>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h3 className='mb-3'>{review.name}</h3>
                        </Card.Title>
                        <Card.Text>
                            {review.description}
                            <h5 className='mt-3'>Rating: <span className='text-warning'>{review.rating}</span></h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Reviews;