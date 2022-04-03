import React from 'react';
import { Button } from 'react-bootstrap';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Home = () => {
    return (
        <div>
            <section className='d-md-flex justify-content-between container align-items-center my-5'>
                <div className='text-left'>
                    <h1 className='text-primary'>Let's buy laptop from</h1>
                    <h1 className='text-info'>Shop Laptop</h1>
                    <p>This is our best laptop of 2022. This is a very powerful laptop. It can run any programs. It is very fast and runs very smooth. You can play game, do programming, watch hd videos. You can contact us if you want to buy it from 15% off.</p>
                    <Button className='mt-3'>Live demo</Button>
                </div>
                <div>
                    <img className='img-fluid' src="laptop.png" alt="laptopImg" />
                </div>
            </section>

            <CustomerReviews />
        </div>
    );
};

export default Home;