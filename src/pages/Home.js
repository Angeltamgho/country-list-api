import React from 'react';
import Countries from '../components/Countries';
import Logos from '../components/Logos';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='main'>
            <div className="header">
                <Logos />
                <Navigation />
            </div>
            <Countries />
        </div>
    );
};

export default Home;