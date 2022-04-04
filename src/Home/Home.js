import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="/home">Home</Link> */}
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/about">ABOUT</Link>

            </nav>
        </div>
    );
};

export default Home;