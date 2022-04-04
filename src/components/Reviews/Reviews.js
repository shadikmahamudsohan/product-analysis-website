import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Reviews = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div className='mb-4'>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <span className="fs-4">{name}</span>
                        </Card.Title>
                        <Card.Text>
                            {description}
                            <br />
                            <span className='text-warning fs-4'>{rating}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Reviews;