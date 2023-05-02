import React from 'react';
import Header from '../../Components/Header/Header';
import Offer from '../../Components/Offer/Offer';
import Chefs from '../../Components/Chefs/Chefs';
import CustomerReview from '../../Components/CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Header />
            <Offer />
            <Chefs />
            <CustomerReview/>
        </div>
    );
};

export default Home;