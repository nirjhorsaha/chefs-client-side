import React from 'react';
import Header from '../../Components/Header/Header';
import Offer from '../../Components/Offer/Offer';
import Chefs from '../../Components/Chefs/Chefs';
import CustomerOffer from '../../Components/CustomerReview/CustomerReview';


const Home = () => {
    return (
        <div>
            <Header />
            <Offer />
            <Chefs />
            <CustomerOffer />
        </div>
    );
};

export default Home;