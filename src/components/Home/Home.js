import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='p-5'>
                <h1>Your NEXT Laptop</h1>
                <h1 style={{ color: 'blue' }}>Your BEST Laptop</h1>
                <p className='description'>The best laptop under 50,00 0 tk. All latest features are available in this laptop.Is VivoBook a good laptop?
                    In a nutshell, the Asus VivoBook S15 is one of the best laptops we've tested in recent months. Short of handling heavy-duty gaming, this is an extremely capable laptop that's just as impressive as the 16-inch MacBook Pro, but is smaller, lighter and considerably less expensive. </p>
                <button className='bg-cyan-300 text-lg rounded-lg live-btn'>Live demo</button>
            </div>
            <div> <img src="asus_laptop.jpg" alt="" /></div>
        </div>
    );
};

export default Home;