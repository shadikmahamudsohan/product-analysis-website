import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='d-flex justify-content-center my-4'>
            <CustomLink className="px-3 font-weight-bold" to="/">Home</CustomLink>
            <CustomLink className="px-3 font-weight-bold" to="/reviews">REVIEWS</CustomLink>
            <CustomLink className="px-3 font-weight-bold" to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink className="px-3 font-weight-bold" to="/blogs">BLOGS</CustomLink>
        </div>
    );
};

export default Header;